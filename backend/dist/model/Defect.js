"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/models/Defect.js

var Defect = _database["default"].define('Defect', {
  defect_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  defect_description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  severity: {
    type: _sequelize.DataTypes.ENUM('Low', 'Medium', 'High'),
    allowNull: false
  },
  status: {
    type: _sequelize.DataTypes.ENUM('Returned', 'Approved', 'Rejected'),
    defaultValue: 'Returned'
  },
  test_case_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  }
}, {
  tableName: 'Defects',
  timestamps: false
});
var _default = exports["default"] = Defect;