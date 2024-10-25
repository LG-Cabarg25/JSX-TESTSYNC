import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AuthRegister from "../../hooks/AuthRegister";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Estado para el modal de Términos y Condiciones
  const [showTermsModal, setShowTermsModal] = useState(false);

  const toggleBothPasswords = () => {
    setShowPassword(!showPassword);
    setShowRePassword(!showRePassword);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.rePassword) {
      toast.error("¡Las contraseñas no coinciden!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const result = await AuthRegister({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        toast.success("¡Registro exitoso!", {
          position: "top-right",
          autoClose: 3000,
        });
        reset(); // Reinicia el formulario después del éxito
      } else {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch {
      toast.error("Error en el registro, intente nuevamente más tarde", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      {/* Modal de Términos y Condiciones */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">
              Términos y Condiciones
            </h2>
            <p className="mb-4">
              TESTSYNC es un sistema de control de proyectos y gestión de
              pruebas desarrollado con fines educativos, destinado a facilitar
              la planificación, ejecución de pruebas y seguimiento de defectos
              en entornos de software. Al acceder a TESTSYNC, el usuario acepta
              utilizar el sistema de forma responsable y en concordancia con
              estos Términos y Condiciones. El sistema es de acceso abierto y su
              uso debe ser acorde a los objetivos educativos y de gestión
              establecidos. <br/>El usuario debe mantener la confidencialidad de sus
              credenciales y es responsable de cualquier actividad realizada
              bajo su cuenta. TESTSYNC se compromete a proteger la información
              personal de los usuarios, la cual no se compartirá con terceros,
              salvo en caso de requerimiento legal o autorización explícita. Al
              ser un proyecto educativo, TESTSYNC se proporciona "tal cual" y no
              garantiza disponibilidad continua; por lo tanto, no asume
              responsabilidad por pérdidas o daños derivados del uso o mal
              funcionamiento del sistema. El contenido y diseño de TESTSYNC son
              propiedad de Luis Gustavo Cabrera Argueta, y no está
              permitida su reproducción, modificación o distribución sin
              autorización. Para cualquier consulta, los usuarios pueden
              contactar a TESTSYNC en cabreraaluisg@gmail.com.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowTermsModal(false)}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      <motion.form onSubmit={handleSubmit(onSubmit)} className="relative z-10">
        {/* Nombre completo */}
        <motion.div className="mb-2" whileHover={{ scale: 1.05 }}>
          <input
            type="text"
            {...register("fullname", { required: true })}
            placeholder="Nombre Completo..."
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 text-[#042354] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
        </motion.div>

        {/* Nombre de usuario */}
        <motion.div className="mb-2" whileHover={{ scale: 1.05 }}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Nombre de usuario..."
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 text-[#042354] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
        </motion.div>

        {/* Email */}
        <motion.div className="mb-2" whileHover={{ scale: 1.05 }}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Correo electrónico..."
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 text-[#042354] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
        </motion.div>

        {/* Contraseña */}
        <motion.div className="mb-2 relative" whileHover={{ scale: 1.05 }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="Contraseña..."
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 text-[#042354] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </span>
        </motion.div>

        {/* Confirmar Contraseña */}
        <motion.div className="mb-2 relative" whileHover={{ scale: 1.05 }}>
          <input
            type={showRePassword ? "text" : "password"}
            {...register("rePassword", { required: true })}
            placeholder="Repetir contraseña..."
            className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 text-[#042354] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowRePassword(!showRePassword)}
          >
            {showRePassword ? "Ocultar" : "Mostrar"}
          </span>
        </motion.div>

        {/* Mostrar ambas contraseñas */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className="text-sm text-[#042354] underline"
            onClick={toggleBothPasswords}
          >
            {showPassword && showRePassword
              ? "Ocultar Contraseñas"
              : "Ver Contraseñas"}
          </button>
        </div>

        {/* Términos de uso */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              Acepto los
              <button
                type="button"
                className="text-[#042354]  underline ml-1"
                onClick={() => setShowTermsModal(true)}
              >
                Términos y Condiciones
              </button>
            </label>
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-[#042354] hover:bg-[#28559c] text-white font-bold py-2 rounded mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          REGISTRARSE
        </motion.button>
      </motion.form>
    </>
  );
};

export default RegisterForm;
