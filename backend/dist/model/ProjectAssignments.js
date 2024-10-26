"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProjectAssignments = _database["default"].define('Project_Assignments', {
  assignment_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  project_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  project_role_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  name_task: {
    // Nuevo campo
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: _sequelize.DataTypes.ENUM('To do', 'In progress', 'In review', 'In testing', 'Approved', 'Returned', 'Rejected'),
    allowNull: false
  }
}, {
  tableName: 'Project_Assignments',
  timestamps: false
});
var _default = exports["default"] = ProjectAssignments;