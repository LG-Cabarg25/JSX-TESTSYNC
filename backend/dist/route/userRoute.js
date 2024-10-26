"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _UserController = require("../controller/UserController.js");
var router = (0, _express.Router)();
router.post('/register', _UserController.registerUser); // Ruta para registrar usuarios
router.post('/login', _UserController.loginUser); // Ruta para login de usuarios
router.post('/getByUsername', _UserController.getUserByUsername);
var _default = exports["default"] = router;