import { useState } from "react";
import { SERVIDOR } from "../services";

// Función para crear un proyecto
const useProjectCreate = () => {
  const [projectId, setProjectId] = useState(null);

  const createProject = async (newProject) => {
    try {
      const projectData = {
        ...newProject,
        p_team_roles: newProject.p_team_roles ?? [], // Enviar un array vacío si no hay roles
      };

      const response = await fetch(`${SERVIDOR}/api/project/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setProjectId(data.projectId); // Suponiendo que el ID del proyecto viene en la respuesta como 'projectId'

      return { success: true, projectId: data.projectId };
    } catch (error) {
      console.error("Error creando el proyecto:", error);
      return { success: false };
    }
  };

  return { projectId, createProject };
};

export default useProjectCreate;
