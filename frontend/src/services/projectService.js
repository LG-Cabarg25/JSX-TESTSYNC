import axios from 'axios';
import { SERVIDOR } from './Servidor';

// Obtener los roles del equipo en un proyecto
export const getProjectRoles = async (projectId, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/project/${projectId}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch {
    throw new Error('Error al MOSTRAR miembro al equipo');
  }
};

// Obtener proyectos asignados y creados por el usuario
export const getProjectsAssignedAndCreatedByUser = async (userId, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/project/user/${userId}/assigned`, {
      headers: { 'x-access-token': token },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener proyectos asignados:', error.message);
    throw error;
  }
};

// Registrar un nuevo proyecto
export const registerProject = async (newProject, token) => {
  try {
    const response = await axios.post(`${SERVIDOR}/api/project/register`, newProject, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al registrar el proyecto:", error.message);
    throw error;
  }
};

// Verificar si el nombre del proyecto existe
export const checkProjectNameExists = async (projectName, token) => {
  try {
    const response = await axios.get(`${SERVIDOR}/api/project/check/${projectName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.exists;
  } catch {
    throw new Error('Error al verificar si el nombre del proyecto existe');
  }
};

// Eliminar un proyecto por ID
export const deleteProjectById = async (projectId, token) => {
  try {
    const response = await axios.delete(`${SERVIDOR}/api/project/delete/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch {
    throw new Error('Error al eliminar el proyecto');
  }
};

// Eliminar el rol de un proyecto por ID
export const deleteProjectRoleById = async (projectRoleId, token) => {
  try {
    const response = await axios.delete(`${SERVIDOR}/api/project/delete-project-roles/${projectRoleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch {
    throw new Error('Error al eliminar el rol del proyecto');
  }
};

// Agregar un miembro al equipo
export const addTeamMember = async (projectId, userId, role, token) => {
  try {
    const response = await axios.post(
      `${SERVIDOR}/api/project/register-project-roles/${projectId}`,
      {
        p_team_roles: [{ user_id: userId, role }],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch {
    throw new Error('Error al agregar miembro al equipo');
  }
};

// Actualizar el rol de un miembro del equipo
export const updateTeamMemberRole = async (projectRoleId, role, token) => {
  try {
    const response = await axios.put(
      `${SERVIDOR}/api/project/project-role/update/${projectRoleId}`,
      { p_role: role },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch {
    throw new Error('Error al actualizar el rol del miembro');
  }
};
