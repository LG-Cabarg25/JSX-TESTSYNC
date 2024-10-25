import axios from 'axios';
import { SERVIDOR } from './Servidor'; // Asegúrate de que la ruta sea correcta

// Registrar una reunión
export const registerMeeting = async (meetingData, token) => {
  try {
    const response = await axios.post(`${SERVIDOR}/api/meeting/register`, meetingData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar la reunión:', error);
    throw error; // Lanzar el error para que pueda ser manejado por quien llame a la función
  }
};

// Actualizar una reunión
export const updateMeeting = async (meetingId, meetingData, token) => {
  try {
    const response = await axios.put(`${SERVIDOR}/api/meeting/update/${meetingId}`, meetingData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la reunión:', error);
    throw error; // Lanzar el error para que pueda ser manejado por quien llame a la función
  }
};

// Obtener reuniones por ID del usuario
export const getMeetingsByUserId = async (userId, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/meeting/user/${userId}/meetings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener reuniones por ID del usuario:', error);
    throw error; // Lanzar el error para que pueda ser manejado por quien llame a la función
  }
};
