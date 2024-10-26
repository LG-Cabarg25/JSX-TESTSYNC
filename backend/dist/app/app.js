"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _userRoute = _interopRequireDefault(require("../route/userRoute.js"));
var _projectRoute = _interopRequireDefault(require("../route/projectRoute.js"));
var _meetingRoute = _interopRequireDefault(require("../route/meetingRoute.js"));
var _projectAssignmentsRoute = _interopRequireDefault(require("../route/projectAssignmentsRoute.js"));
var _testPlansRoute = _interopRequireDefault(require("../route/testPlansRoute.js"));
var _testCasesRoute = _interopRequireDefault(require("../route/testCasesRoute.js"));
var _testImagesRoute = _interopRequireDefault(require("../route/testImagesRoute.js"));
var _testCommentsRoute = _interopRequireDefault(require("../route/testCommentsRoute.js"));
var _projectAssignmentsCommentsRoute = _interopRequireDefault(require("../route/projectAssignmentsCommentsRoute.js"));
var _defectRoute = _interopRequireDefault(require("../route/defectRoute.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importa fileURLToPath

// Import routes 

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
var corsOptions = {
  origin: 'https://testsync.online',
  // Reemplaza con el dominio permitido
  methods: 'GET,POST,PUT,DELETE',
  // Métodos HTTP permitidos
  allowedHeaders: 'Content-Type,Authorization, x-access-token' // Headers permitidos
};
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

// Obtiene el directorio actual
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);

// Servir archivos estáticos desde la carpeta uploads
app.use('/uploads', _express["default"]["static"](_path["default"].join(_dirname, '../../uploads')));

// Use routes 
app.use('/api/user', _userRoute["default"]);
app.use('/api/project', _projectRoute["default"]);
app.use('/api/meeting', _meetingRoute["default"]);
app.use('/api/project-assignments', _projectAssignmentsRoute["default"]);
app.use('/api/project-assignments-comments', _projectAssignmentsCommentsRoute["default"]);
app.use('/api/test-plans', _testPlansRoute["default"]);
app.use('/api/test-cases', _testCasesRoute["default"]);
app.use('/api/test-images', _testImagesRoute["default"]);
app.use('/api/test-comments', _testCommentsRoute["default"]);
app.use('/api/defects', _defectRoute["default"]);
var _default = exports["default"] = app;