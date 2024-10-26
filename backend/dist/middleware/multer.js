"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Configuración del almacenamiento de multer
var storage = _multer["default"].diskStorage({
  // Directorio donde se guardarán los archivos subidos
  destination: function destination(req, file, cb) {
    var uploadDir = 'uploads/';

    // Verifica si el directorio existe, si no, lo crea
    if (!_fs["default"].existsSync(uploadDir)) {
      _fs["default"].mkdirSync(uploadDir);
    }
    cb(null, uploadDir); // Define el directorio donde se guardarán los archivos
  },
  // Definir el nombre del archivo
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, "".concat(file.fieldname, "-").concat(uniqueSuffix).concat(_path["default"].extname(file.originalname)));
  }
});

// Filtro para validar el tipo de archivo
var fileFilter = function fileFilter(req, file, cb) {
  var allowedFileTypes = /jpeg|jpg|png|pdf|docx/; // Tipos de archivo permitidos
  var extname = allowedFileTypes.test(_path["default"].extname(file.originalname).toLowerCase());
  var mimetype = allowedFileTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Error: Tipo de archivo no permitido.'));
  }
};

// Inicializar multer con la configuración de almacenamiento y filtros
var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  // Límite de tamaño de archivo (10MB en este caso)
  fileFilter: fileFilter
});
var _default = exports["default"] = upload;