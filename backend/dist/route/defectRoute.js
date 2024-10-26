"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _DefectController = require("../controller/DefectController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();

// Registrar un nuevo defecto
router.post('/register', _verifyToken["default"], _DefectController.registerDefect);

// Obtener todos los defectos
router.get('/test-case/:test_case_id', _verifyToken["default"], _DefectController.getDefectsByTestCase);

// Actualizar el estado de un defecto
router.put('/update/:defect_id', _verifyToken["default"], _DefectController.updateDefectStatus);
var _default = exports["default"] = router;