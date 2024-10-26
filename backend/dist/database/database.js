"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.port = exports.password = exports.host = exports["default"] = exports.bd = void 0;
var _sequelize = require("sequelize");
var bd = exports.bd = 'db_aae9a9_testsyn';
var user = exports.user = 'aae9a9_testsyn';
var password = exports.password = 'Arguet2024Guss';
var host = exports.host = 'MYSQL8003.site4now.net';
var port = exports.port = '3306';

// Crear la instancia de Sequelize
var sequelize = new _sequelize.Sequelize(bd, user, password, {
  host: host,
  port: null,
  dialect: 'mysql',
  logging: false // Deshabilitar el logging si no quieres ver las consultas SQL en la consola
});

// Exportar la instancia de Sequelize como default
var _default = exports["default"] = sequelize;