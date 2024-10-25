import { SERVIDOR } from "../services/Servidor";
import jwtDecode from "jwt-decode";

// Función para autenticar al usuario
const AuthLogin = async (data) => {
  const { username, password } = data;

  try {
    const response = await fetch(`${SERVIDOR}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const result = await response.json();
      // Guarda el token en localStorage
      if (result.token) {
        localStorage.setItem("token", result.token);
        const decodedToken = jwtDecode(result.token);
        
        const user = {
          username: decodedToken.username,
          email: decodedToken.email,
        };

        return {
          success: true,
          message: "Login exitoso",
          user,
          token: result.token,
        };
      }
      return {
        success: false,
        message: "Token no proporcionado",
      };
    } else {
      const errorResponse = await response.json();
      return {
        success: false,
        message: errorResponse.message || "Error en el login",
      };
    }
  } catch (error) {
    console.error("Error en la red o servidor:", error);
    return {
      success: false,
      message: "Error en la red o servidor. Intente nuevamente.",
    };
  }
};

export default AuthLogin;
