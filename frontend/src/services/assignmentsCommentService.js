import axios from 'axios';
import { SERVIDOR } from './Servidor';

// Registrar un comentario
export const registerProjectAssignmentComment = async (commentData, token) => {
  const response = await axios.post(`${SERVIDOR}/api/project-assignments-comments/register`, commentData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// Actualizar un comentario
export const updateProjectAssignmentComment = async (commentId, updatedComment, token) => {
  const response = await axios.put(`${SERVIDOR}/api/project-assignments-comments/update/${commentId}`, updatedComment, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// Eliminar un comentario
export const deleteProjectAssignmentComment = async (commentId, token) => {
  const response = await axios.delete(`${SERVIDOR}/api/project-assignments-comments/delete/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Obtener todos los comentarios de una asignación de tarea
export const fetchProjectAssignmentComments = async (assignmentId, token) => {
  const response = await axios.get(`${SERVIDOR}/api/project-assignments-comments/comments/${assignmentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
