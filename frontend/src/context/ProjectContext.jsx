import React, { createContext, useState, useContext } from 'react';
import { getProjectsAssignedAndCreatedByUser, registerProject } from '../services/projectService';
import { AuthContext } from './AuthContext';

const ProjectContext = createContext(undefined);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);

  const loadProjects = async () => {
    const token = localStorage.getItem("token");
    if (!token || !user) {
      console.error("Token o usuario no disponible");
      return;
    }

    try {
      const data = await getProjectsAssignedAndCreatedByUser(user.user_id, token);
      setProjects(data);
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  };

  const addProject = async (newProject) => {
    const token = localStorage.getItem("token");
    try {
      const response = await registerProject(newProject, token);
      setProjects([...projects, response]);
      return { success: true, message: "Proyecto registrado exitosamente" };
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      return { success: false, message: "Error en la creación del proyecto" };
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, loadProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
