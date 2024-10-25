import { useState } from "react";

const IntroSection = () => {
  // Estado para controlar si se muestra o no el contenido adicional
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Función para alternar el estado de mostrar más o menos información
  const toggleMoreInfo = () => {
    setShowMoreInfo((prevState) => !prevState);
  };

  return (
    <div className="flex justify-between items-center px-10 lg:px-20 py-20 bg-gray-50">
      <div className="w-full lg:w-1/2">
        <h1 className="text-6xl text-[#042354] font-bold mb-4">
          Gestión sincronizada de pruebas y proyectos
        </h1>
        <p className="text-xl text-g[#042354] mb-6">
          TestSync es un sistema que sincroniza las pruebas y la gestión de
          proyectos de software, lo que permite a los equipos planificar,
          ejecutar y supervisar las pruebas de calidad con eficacia,
          garantizando productos sólidos y sin errores.
        </p>

        {/* Contenido adicional que se muestra/oculta al hacer clic en el botón */}
        {showMoreInfo && (
          <div className="mt-4">
            <p className="text-lg text-[#042354]">
              Con TestSync, los equipos pueden estructurar sus pruebas, asignar
              responsabilidades, realizar un seguimiento detallado de los
              resultados y gestionar los defectos encontrados, lo que garantiza
              un control exhaustivo sobre la calidad del software. Este sistema
              contribuye a que los productos finales sean sólidos y estén libres
              de errores, elevando los estándares de calidad y reduciendo el
              tiempo de desarrollo en entornos colaborativos.
            </p>
          </div>
        )}

        {/* Botón que alterna entre "Más información" y "Ver menos" */}
        <button
          className="bg-gray-200 px-6 py-3 rounded-full text-lg hover:bg-gray-300 transition mt-4"
          onClick={toggleMoreInfo}
        >
          {showMoreInfo ? "Ver menos" : "Más información"}
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full h-64 lg:h-full bg-white rounded-lg flex justify-center items-center">
          <img src="src/assets/img/home.png" alt="home" width="600" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
