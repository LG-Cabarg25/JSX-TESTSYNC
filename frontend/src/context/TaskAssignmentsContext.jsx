import { createContext, useContext, useState } from 'react';
import { fetchTaskAssignments, registerTaskAssignment } from '../services/assignmentsService';
import { AuthContext } from './AuthContext';

const TaskAssignmentsContext = createContext(undefined);

export const TaskAssignmentsProvider = ({ children }) => {
  const { token } = useContext(AuthContext) || {};
  const [taskAssignments, setTaskAssignments] = useState([]);

  const isTokenAvailable = () => {
    if (!token) {
      console.error('Token no disponible');
      return false;
    }
    return true;
  };

  const fetchAssignments = async (projectId) => {
    if (!isTokenAvailable()) return [];

    try {
      const data = await fetchTaskAssignments(projectId, token);
      setTaskAssignments(data);
      return data;
    } catch (error) {
      console.error('Error al obtener las asignaciones de tareas:', error);
      return [];
    }
  };

  const createTaskAssignment = async (taskData) => {  // Renombrado aquí para mantener consistencia
    if (!isTokenAvailable()) throw new Error('Token no disponible');

    try {
      const newTaskAssignment = await registerTaskAssignment(taskData, token);
      setTaskAssignments((prev) => [...prev, newTaskAssignment]);
      return newTaskAssignment;
    } catch (error) {
      console.error('Error al crear la asignación de tarea:', error);
      throw error;
    }
  };

  return (
    <TaskAssignmentsContext.Provider value={{ taskAssignments, fetchTaskAssignments: fetchAssignments, createTaskAssignment }}>
      {children}
    </TaskAssignmentsContext.Provider>
  );
};

export const useTaskAssignments = () => {
  const context = useContext(TaskAssignmentsContext);
  if (!context) {
    throw new Error('useTaskAssignments debe usarse dentro de un TaskAssignmentsProvider');
  }
  return context;
};
