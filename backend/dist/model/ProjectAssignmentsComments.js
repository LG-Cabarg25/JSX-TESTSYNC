"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProjectAssignmentsComments = _database["default"].define('Project_Assignments_Comments', {
  project_assignments_comments_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  assignment_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  comments: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Project_Assignments_Comments',
  // Cambiado de 'Meetings' a 'Project_Assignments_Comments'
  timestamps: false // Si no necesitas los campos updatedAt y createdAt automáticos
});
var _default = exports["default"] = ProjectAssignmentsComments;