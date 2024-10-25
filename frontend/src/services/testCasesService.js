import axios from 'axios';
import { SERVIDOR } from './Servidor'; // Asegúrate de que la ruta sea correcta

// Función para registrar un nuevo caso de prueba
export const registerTestCase = async (data, token) => {
  try {
    const response = await axios.post(
      `${SERVIDOR}/api/test-cases/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al registrar el caso de prueba:", error.message);
    }
    throw error;
  }
};

// Función para obtener todos los casos de prueba de un plan
export const fetchTestCases = async (testPlanId, token) => {
  try {
    const response = await axios.get(
      `${SERVIDOR}/api/test-plans/${testPlanId}/test-cases`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener los casos de prueba:", error.message);
    }
    throw error;
  }
};

// Función para eliminar un caso de prueba
export const deleteTestCase = async (testCaseId, token) => {
  try {
    const response = await axios.delete(
      `${SERVIDOR}/api/test-cases/delete/${testCaseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar el caso de prueba:", error.message);
    }
    throw error;
  }
};

// Función para obtener todos los casos de prueba de un plan
export const fetchTestCasesByPlan = async (testPlanId, token) => {
  try {
    const response = await axios.get(
      `${SERVIDOR}/api/test-cases/test-plan/${testPlanId}/cases`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Retorna los datos de los casos de prueba
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener los casos de prueba:", error.message);
    }
    throw error;
  }
};

// Enviar p_status en lugar de status
export const updateTestCase = async (testCaseId, data, token) => {
  try {
    const response = await axios.put(
      `${SERVIDOR}/api/test-cases/update/${testCaseId}`,
      { p_status: data.status },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar el caso de prueba:", error.message);
    }
    throw error;
  }
};

// Subir una imagen para un caso de prueba
export const uploadTestCaseImage = async (formData, token) => {
  try {
    const response = await axios.post(
      `${SERVIDOR}/api/test-case-images/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al subir la imagen del caso de prueba:", error);
    throw error;
  }
};

// Actualizar el avance del caso de prueba
export const updateTestCaseProgress = async (data, token) => {
  try {
    const response = await axios.put(
      `${SERVIDOR}/api/test-cases/${data.test_case_id}/progress`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el avance del caso de prueba:", error);
    throw error;
  }
};
