"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TestCases = _database["default"].define('TestCases', {
  test_case_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  test_plan_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  project_role_id: {
    // Cambiado de tester_id a project_role_id
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: _sequelize.DataTypes.ENUM('Passed', 'Failed', 'Pending'),
    defaultValue: 'Pending',
    allowNull: false
  },
  priority: {
    // Agregada la columna de prioridad
    type: _sequelize.DataTypes.ENUM('Low', 'Medium', 'High'),
    defaultValue: 'Medium',
    allowNull: false
  },
  created_at: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _database["default"].literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
}, {
  tableName: 'Test_Cases',
  timestamps: false
});
var _default = exports["default"] = TestCases;