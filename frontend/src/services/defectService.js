import axios from 'axios';
import { SERVIDOR } from './Servidor'; // Asegúrate de que la ruta sea correcta

// Registrar un defecto
export const registerDefect = async (
  testCaseId, 
  description, 
  severity, 
  status, // Añadir el estado como parámetro
  token
) => {
  try {
    const response = await axios.post(
      `${SERVIDOR}/api/defects/register`, 
      {
        defect_description: description,
        severity: severity,
        status: status, // Incluir el estado en el cuerpo de la solicitud
        test_case_id: testCaseId,
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al registrar el defecto:', error);
    throw error;
  }
};

// Obtener los defectos por un caso de prueba específico
export const fetchDefects = async (testCaseId, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/defects/${testCaseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los defectos:', error);
    throw error;
  }
};

// Actualizar el estado de un defecto
export const updateDefect = async (defectId, status, token) => {
  try {
    const response = await axios.put(`${SERVIDOR}/api/defects/update/${defectId}`, { status }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el defecto:', error);
    throw error;
  }
};
