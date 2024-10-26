"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config/config.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length); // Remover "Bearer " del token si está presente
  }
  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }
  try {
    var decoded = _jsonwebtoken["default"].verify(token, _config.secret); // Verifica el token con la clave secreta
    req.userId = decoded.user_id; // Asigna el user_id decodificado
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error.message); // Mostrar el error detallado
    return res.status(401).json({
      auth: false,
      message: 'Failed to authenticate token'
    });
  }
};
var _default = exports["default"] = verifyToken;