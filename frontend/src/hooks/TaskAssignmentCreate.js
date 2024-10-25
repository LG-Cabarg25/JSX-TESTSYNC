import { useState, useContext } from 'react';
import { registerTaskAssignment } from '../services/assignmentsService'; // Importa el servicio
import { AuthContext } from '../context/AuthContext'; // Token de autenticación

const useTaskAssignmentCreate = () => {
  const [taskAssignmentId, setTaskAssignmentId] = useState(null);
  const { token } = useContext(AuthContext);

  const createTaskAssignment = async (newTask) => {
    if (!token) {
      console.error('Token no disponible');
      return { success: false, message: 'Token no disponible' };
    }

    try {
      const data = await registerTaskAssignment(newTask, token);
      if (data?.assignmentId) {
        setTaskAssignmentId(data.assignmentId);
        return { success: true, assignmentId: data.assignmentId };
      } else {
        return { success: false, message: 'ID de tarea no encontrado en la respuesta' };
      }
    } catch (error) {
      console.error('Error creando la tarea:', error);
      return { success: false, message: 'Error creando la tarea' };
    }
  };

  return { taskAssignmentId, createTaskAssignment };
};

export default useTaskAssignmentCreate;
