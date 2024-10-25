import axios from 'axios';
import { SERVIDOR } from './Servidor'; // Asegúrate de que la ruta sea correcta

// Función para subir una imagen de prueba
export const uploadTestImage = async (testCaseId, file, token) => {
  const formData = new FormData();
  formData.append('p_test_case_id', testCaseId.toString());
  formData.append('image', file);

  try {
    const response = await axios.post(`${SERVIDOR}/api/test-images/register`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};

// Función para obtener las imágenes de un caso de prueba
export const fetchTestImages = async (testCaseId, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/test-images/test-case/${testCaseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    throw error;
  }
};

// Función para eliminar una imagen
export const deleteTestImage = async (imageId, token) => {
  try {
    const response = await axios.delete(`${SERVIDOR}/api/test-images/${imageId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la imagen:', error);
    throw error;
  }
};
