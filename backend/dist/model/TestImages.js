"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TestImages = _database["default"].define('TestImages', {
  test_image_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  test_case_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: _sequelize.DataTypes.BLOB('long'),
    allowNull: true
  }
}, {
  tableName: 'Test_Images',
  timestamps: false
});
var _default = exports["default"] = TestImages;