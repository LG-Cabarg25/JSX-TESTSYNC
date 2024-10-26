"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _TestPlansController = require("../controller/TestPlansController.js");
var _multer = _interopRequireDefault(require("../middleware/multer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importa multer

var router = (0, _express.Router)();

// Rutas para registrar, actualizar y obtener planes de pruebas
router.post('/register', _verifyToken["default"], _multer["default"].single('document'), _TestPlansController.registerTestPlan); // Registrar un plan de prueba con archivo
router.put('/update/:p_test_plan_id', _verifyToken["default"], _multer["default"].single('document'), _TestPlansController.updateTestPlan); // Actualizar plan de pruebas
router.get('/project/:p_project_id', _verifyToken["default"], _TestPlansController.getTestPlansByProject); // Obtener planes de pruebas por proyecto
router["delete"]('/delete/:p_test_plan_id', _verifyToken["default"], _TestPlansController.deleteTestPlan);
var _default = exports["default"] = router;