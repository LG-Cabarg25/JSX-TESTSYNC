"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
var _Projects = _interopRequireDefault(require("./Projects.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Meetings = _database["default"].define('Meetings', {
  meeting_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  meeting_date: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  meeting_start_time: {
    type: _sequelize.DataTypes.TIME,
    allowNull: false
  },
  meeting_end_time: {
    type: _sequelize.DataTypes.TIME,
    allowNull: false
  },
  meeting_status: {
    type: _sequelize.DataTypes.ENUM('Pending', 'Completed'),
    defaultValue: 'Pending',
    allowNull: false
  },
  meeting_description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  meeting_link: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Meetings',
  timestamps: false // Si no necesitas los campos updatedAt y createdAt automáticos
});
var _default = exports["default"] = Meetings;