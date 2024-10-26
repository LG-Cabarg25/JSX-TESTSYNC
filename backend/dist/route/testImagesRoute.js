"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _TestImagesController = require("../controller/TestImagesController.js");
var _multer = _interopRequireDefault(require("../middleware/multer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importa multer

var router = (0, _express.Router)();

// Ruta para registrar una imagen de prueba
router.post('/register', _verifyToken["default"], _multer["default"].single('image'), _TestImagesController.registerTestImage);

// Ruta para obtener todas las imágenes relacionadas a un caso de prueba
router.get('/test-case/:test_case_id', _verifyToken["default"], _TestImagesController.getTestImagesByTestCase);

// Ruta para eliminar una imagen de prueba
router["delete"]('/:test_image_id', _verifyToken["default"], _TestImagesController.deleteTestImage);
var _default = exports["default"] = router;