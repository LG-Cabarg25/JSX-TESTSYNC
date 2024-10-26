"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _ProjectsController = require("../controller/ProjectsController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();

// Ruta para verificar si un proyecto con un nombre ya existe
router.get('/check/:project_name', _verifyToken["default"], _ProjectsController.checkProjectNameExists);

// Ruta para obtener todos los proyectos asociados a un usuario específico (creados y asignados)
router.get('/user/:userId/assigned', _verifyToken["default"], _ProjectsController.getProjectsAssignedAndCreatedByUser);

// Registrar un nuevo proyecto
router.post('/register', _verifyToken["default"], _ProjectsController.registerProject);

// Obtener todos los proyectos creados por un usuario
router.get('/user/:userId', _verifyToken["default"], _ProjectsController.getProjectsByUser);

// Obtener un proyecto específico por su ID
router.get('/:p_project_id', _verifyToken["default"], _ProjectsController.getProjectById);

// Registrar roles en un proyecto
router.post('/register-project-roles/:p_project_id', _verifyToken["default"], _ProjectsController.registerProjectRoles);

// Actualizar un proyecto existente y su equipo por su ID
router.put('/update/:p_project_id', _verifyToken["default"], _ProjectsController.updatedProject);

// Actualizar un rol en un proyecto por su ID
router.put('/project-role/update/:p_project_role_id', _verifyToken["default"], _ProjectsController.updatedProjectRoles);

// Eliminar un proyecto específico por su ID
router["delete"]('/delete/:p_project_id', _verifyToken["default"], _ProjectsController.deletedProject);

// Eliminar un rol en un proyecto
router["delete"]('/delete-project-roles/:p_project_role_id', _verifyToken["default"], _ProjectsController.deletedProjectRoles);

// Obtener todos los roles de un proyecto por su ID
router.get('/:p_project_id/roles', _verifyToken["default"], _ProjectsController.listProjectRoles);
router.get('/:p_project_id/users', _verifyToken["default"], _ProjectsController.listUsersAssignedToProject);
router.get('/:p_project_id/tasks', _verifyToken["default"], _ProjectsController.getProjectAssignments);
router.get('/:projectId/results', _ProjectsController.getProjectResults);
var _default = exports["default"] = router;