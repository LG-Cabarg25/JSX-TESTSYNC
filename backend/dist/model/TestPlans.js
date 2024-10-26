"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TestPlans = _database["default"].define('TestPlans', {
  test_plan_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  project_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  plan_name: {
    type: _sequelize.DataTypes.STRING(255),
    allowNull: true
  },
  plan_type: {
    // Nuevo campo para tipo de plan
    type: _sequelize.DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    // Nuevo campo para descripción general
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  start_date: {
    // Nuevo campo para fecha de inicio
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  end_date: {
    // Nuevo campo para fecha límite
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  document: {
    type: _sequelize.DataTypes.BLOB('long'),
    allowNull: true
  },
  status: {
    type: _sequelize.DataTypes.ENUM('Pending', 'In progress', 'Completed'),
    allowNull: true
  },
  created_at: {
    type: _sequelize.DataTypes.DATE,
    // Asegúrate de que el tipo sea DATE
    allowNull: false,
    defaultValue: _sequelize.DataTypes.NOW // Agrega un valor por defecto de la fecha actual
  }
}, {
  tableName: 'Test_Plans',
  timestamps: false // Ya que no estás utilizando los campos `createdAt` y `updatedAt` por defecto de Sequelize
});
var _default = exports["default"] = TestPlans;