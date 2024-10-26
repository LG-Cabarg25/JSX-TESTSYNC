"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../database/database.js"));
var _Users = _interopRequireDefault(require("./Users.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Projects = _database["default"].define('Projects', {
  project_id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  project_name: {
    type: _sequelize.DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  start_date: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: _sequelize.DataTypes.ENUM('In Progress', 'Completed', 'Pending'),
    defaultValue: 'Pending',
    allowNull: false
  },
  pm_id: {
    type: _sequelize.DataTypes.INTEGER,
    // Cambiado a INTEGER para referenciar a la tabla de usuarios
    allowNull: false,
    references: {
      model: _Users["default"],
      // Establece la relación con el modelo Users
      key: 'user_id'
    }
  },
  created_at: {
    type: _sequelize.DataTypes.DATE,
    // Cambiado a DATE para almacenar la fecha de creación
    allowNull: false,
    defaultValue: _sequelize.Sequelize.NOW // Establece automáticamente la fecha y hora actual
  }
}, {
  tableName: 'Projects',
  timestamps: false // Si no necesitas los campos updatedAt y createdAt automáticos
});

// Relación con Users
Projects.belongsTo(_Users["default"], {
  foreignKey: 'pm_id',
  as: 'project_manager'
});
var _default = exports["default"] = Projects;