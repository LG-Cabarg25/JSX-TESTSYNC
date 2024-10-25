// Validación para determinar si el usuario puede editar el proyecto (solo PM)
export const canEditProject = (userRole, pm_id, userId) => {
  return userRole === "PM" || userId === pm_id; // PM puede editar o el propietario del proyecto
};

// Validación para determinar si el usuario puede agregar una tarea (Developer y QA)
export const canAddTask = (userRole) => {
  return userRole === "Developer" || userRole === "QA" || userRole === "PM"; // Developer y QA pueden agregar tareas
};

// Validación para determinar si el usuario puede eliminar el proyecto (solo PM)
export const canDeleteProject = (userRole, pm_id, userId) => {
  return userRole === "PM" && userId === pm_id; // Solo el PM puede eliminar el proyecto
};

// Validación para determinar si el usuario puede crear o editar planes de prueba (solo QA)
export const canManageTestPlan = (userRole) => {
  return userRole === "QA"; // Solo QA puede gestionar planes de prueba
};

// Validación para determinar si el usuario puede ver los detalles (PM, QA, Developer, Tester)
export const canViewDetails = (userRole) => {
  return (
    userRole === "PM" ||
    userRole === "QA" ||
    userRole === "Developer" ||
    userRole === "Tester"
  );
};

// Validación para determinar si el usuario puede ejecutar pruebas (solo Tester)
export const canExecuteTests = (userRole) => {
  return userRole === "Tester"; // Solo Tester puede ejecutar pruebas
};

// Validación para determinar si el usuario puede editar un plan de prueba (solo QA)
export const canEditTestPlan = (userRole) => {
  return userRole === "QA"; // Solo QA puede editar planes de prueba
};

// Validación para determinar si el usuario puede eliminar un plan de prueba (solo QA)
export const canDeleteTestPlan = (userRole) => {
  return userRole === "QA"; // Solo QA puede eliminar planes de prueba
};

// Validación para determinar si el usuario puede asignar tareas (solo QA)
export const canAssignTasksToPlan = (userRole) => {
  return userRole === "QA"; // Solo QA puede asignar tareas a un plan
};
