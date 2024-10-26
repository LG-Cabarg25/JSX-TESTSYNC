"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _TestCommentsController = require("../controller/TestCommentsController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();

// Ruta para registrar un comentario de prueba
router.post('/register', _verifyToken["default"], _TestCommentsController.registerTestComment);

// Ruta para actualizar un comentario de prueba existente
router.put('/update/:p_comment_id', _verifyToken["default"], _TestCommentsController.updateTestComment);
router.get('/test-case/:test_case_id', _TestCommentsController.getCommentsByTestCase);
var _default = exports["default"] = router;