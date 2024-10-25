import { SERVIDOR } from "./Servidor";

// Función para registrar un nuevo usuario
export const registerUser = async (data) => {
  try {
    const response = await fetch(`${SERVIDOR}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      return { success: true, message: "Registro exitoso" };
    } else {
      const errorResponse = await response.json();
      return {
        success: false,
        message: errorResponse.message || "Error en el registro",
      };
    }
  } catch (error) {
    console.error("Error de red:", error);
    return { success: false, message: "Error de red" };
  }
};
