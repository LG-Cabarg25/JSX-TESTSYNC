"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TestComments = _database["default"].define('TestComments', {
  comment_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  test_case_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Test_Cases',
      // Nombre de la tabla de casos de prueba
      key: 'test_case_id'
    }
  },
  comment_text: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  }
}, {
  tableName: 'commentsTestCase',
  timestamps: false
});
var _default = exports["default"] = TestComments;