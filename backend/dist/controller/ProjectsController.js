"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedProjectRoles = exports.updatedProject = exports.registerProjectRoles = exports.registerProject = exports.listUsersAssignedToProject = exports.listProjectRoles = exports.getProjectsByUser = exports.getProjectsAssignedAndCreatedByUser = exports.getProjectResults = exports.getProjectById = exports.getProjectAssignments = exports.deletedProjectRoles = exports.deletedProject = exports.checkProjectNameExists = void 0;
var _Projects = _interopRequireDefault(require("../model/Projects.js"));
var _database = _interopRequireDefault(require("../database/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Registrar un proyecto (sin roles)
var registerProject = exports.registerProject = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, p_project_name, p_description, p_start_date, p_end_date, p_status, p_pm_id;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, p_project_name = _req$body.p_project_name, p_description = _req$body.p_description, p_start_date = _req$body.p_start_date, p_end_date = _req$body.p_end_date, p_status = _req$body.p_status;
          p_pm_id = req.userId; // Aquí usas req.userId que es asignado en el middleware
          if (!(!p_project_name || !p_description || !p_start_date || !p_end_date || !p_status || !p_pm_id)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'Todos los campos son obligatorios.'
          }));
        case 5:
          _context.next = 7;
          return _Projects["default"].sequelize.query('CALL procedure_to_register_projects(:p_project_name, :p_description, :p_start_date, :p_end_date, :p_status, :p_pm_id)', {
            replacements: {
              p_project_name: p_project_name,
              p_description: p_description,
              p_start_date: p_start_date,
              p_end_date: p_end_date,
              p_status: p_status,
              p_pm_id: p_pm_id
            }
          });
        case 7:
          res.status(201).json({
            message: 'Proyecto registrado exitosamente'
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Error al registrar el proyecto:', _context.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function registerProject(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Registrar roles de proyecto (independiente de la creación del proyecto)
var registerProjectRoles = exports.registerProjectRoles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var p_project_id, p_team_roles, teamRolesJSON;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          p_project_id = req.params.p_project_id;
          p_team_roles = req.body.p_team_roles;
          if (!(!p_team_roles || p_team_roles.length === 0)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'Los roles del equipo no pueden estar vacíos.'
          }));
        case 5:
          teamRolesJSON = JSON.stringify(p_team_roles);
          _context2.next = 8;
          return _Projects["default"].sequelize.query('CALL procedure_to_register_project_roles(:p_project_id, :p_team_roles)', {
            replacements: {
              p_project_id: p_project_id,
              p_team_roles: teamRolesJSON
            }
          });
        case 8:
          res.status(201).json({
            message: 'Roles del proyecto registrados exitosamente'
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error('Error al registrar roles del proyecto:', _context2.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function registerProjectRoles(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Obtener proyectos por usuario
var getProjectsByUser = exports.getProjectsByUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var userId, projects;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.params.userId;
          if (userId) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'El userId es obligatorio.'
          }));
        case 4:
          _context3.next = 6;
          return _Projects["default"].findAll({
            where: {
              pm_id: userId
            }
          });
        case 6:
          projects = _context3.sent;
          if (!(projects.length === 0)) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'No se encontraron proyectos para este usuario.'
          }));
        case 9:
          return _context3.abrupt("return", res.status(200).json(projects));
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al obtener proyectos por usuario:', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function getProjectsByUser(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

// Obtener proyectos creados y asignados al usuario
var getProjectsAssignedAndCreatedByUser = exports.getProjectsAssignedAndCreatedByUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userId, createdProjects, assignedProjects, allProjects;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          userId = req.params.userId;
          if (userId) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'El userId es obligatorio.'
          }));
        case 4:
          _context4.next = 6;
          return _Projects["default"].findAll({
            where: {
              pm_id: userId
            }
          });
        case 6:
          createdProjects = _context4.sent;
          _context4.next = 9;
          return _Projects["default"].sequelize.query("SELECT * FROM Projects p \n       JOIN Project_Roles r ON p.project_id = r.project_id \n       WHERE r.user_id = :userId", {
            replacements: {
              userId: userId
            },
            type: _Projects["default"].sequelize.QueryTypes.SELECT
          });
        case 9:
          assignedProjects = _context4.sent;
          allProjects = [].concat(_toConsumableArray(createdProjects), _toConsumableArray(assignedProjects));
          if (!(allProjects.length === 0)) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'No se encontraron proyectos para este usuario.'
          }));
        case 13:
          return _context4.abrupt("return", res.status(200).json(allProjects));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          console.error('Error al obtener proyectos creados y asignados al usuario:', _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function getProjectsAssignedAndCreatedByUser(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

// Obtener un proyecto por ID
var getProjectById = exports.getProjectById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var p_project_id, project, projectWithRoles;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          p_project_id = req.params.p_project_id;
          if (p_project_id) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es obligatorio.'
          }));
        case 4:
          _context5.next = 6;
          return _Projects["default"].findOne({
            where: {
              project_id: p_project_id
            }
          });
        case 6:
          project = _context5.sent;
          if (project) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Proyecto no encontrado.'
          }));
        case 9:
          // Verifica si los roles están presentes y asegúrate de enviar los datos correctos
          projectWithRoles = _objectSpread(_objectSpread({}, project.toJSON()), {}, {
            roles: project.roles ? JSON.parse(project.roles) : [] // Convertir roles si están en JSON
          });
          return _context5.abrupt("return", res.status(200).json(projectWithRoles));
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.error('Error al obtener los detalles del proyecto:', _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function getProjectById(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

// Actualizar un proyecto
var updatedProject = exports.updatedProject = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var p_project_id, _req$body2, p_project_name, p_description, p_start_date, p_end_date, p_status, fieldsToUpdate;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          p_project_id = req.params.p_project_id;
          _req$body2 = req.body, p_project_name = _req$body2.p_project_name, p_description = _req$body2.p_description, p_start_date = _req$body2.p_start_date, p_end_date = _req$body2.p_end_date, p_status = _req$body2.p_status; // Crear un objeto con los campos que se quieren actualizar, ignorando los que no están en la solicitud
          fieldsToUpdate = {};
          if (p_project_name) fieldsToUpdate.project_name = p_project_name;
          if (p_description) fieldsToUpdate.description = p_description;
          if (p_start_date) fieldsToUpdate.start_date = p_start_date;
          if (p_end_date) fieldsToUpdate.end_date = p_end_date;
          if (p_status) fieldsToUpdate.status = p_status;

          // Validar si hay campos para actualizar
          if (!(Object.keys(fieldsToUpdate).length === 0)) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: 'No se proporcionaron campos para actualizar.'
          }));
        case 11:
          _context6.next = 13;
          return _Projects["default"].update(fieldsToUpdate, {
            where: {
              project_id: p_project_id
            }
          });
        case 13:
          res.status(200).json({
            message: 'Proyecto actualizado exitosamente.'
          });
          _context6.next = 20;
          break;
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](0);
          console.error('Error al actualizar el proyecto:', _context6.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 16]]);
  }));
  return function updatedProject(_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();

// Actualizar un rol del equipo
var updatedProjectRoles = exports.updatedProjectRoles = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var p_project_role_id, p_role;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          p_project_role_id = req.params.p_project_role_id;
          p_role = req.body.p_role; // Ejecutar la llamada al procedimiento almacenado
          _context7.next = 5;
          return _Projects["default"].sequelize.query('CALL procedure_to_updated_project_roles(:p_project_role_id, :p_role)', {
            replacements: {
              p_project_role_id: p_project_role_id,
              p_role: p_role
            }
          });
        case 5:
          res.status(200).json({
            message: 'Rol de equipo actualizados exitosamente'
          });
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error('Error al actualizar el proyecto y el equipo:', _context7.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function updatedProjectRoles(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

// Eliminar un proyecto
var deletedProject = exports.deletedProject = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var p_project_id;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          p_project_id = req.params.p_project_id;
          if (p_project_id) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es obligatorio.'
          }));
        case 4:
          _context8.next = 6;
          return _Projects["default"].sequelize.query('CALL procedure_to_deleted_projects(:p_project_id)', {
            replacements: {
              p_project_id: p_project_id
            }
          });
        case 6:
          res.status(200).json({
            message: 'Proyecto eliminado exitosamente'
          });
          _context8.next = 13;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.error('Error al eliminar el proyecto:', _context8.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function deletedProject(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

// Eliminar un rol de proyecto
var deletedProjectRoles = exports.deletedProjectRoles = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var p_project_role_id;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          p_project_role_id = req.params.p_project_role_id;
          if (p_project_role_id) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: 'El ID del rol de proyecto es obligatorio.'
          }));
        case 4:
          _context9.next = 6;
          return _Projects["default"].sequelize.query('CALL procedure_to_deleted_project_roles(:p_project_role_id)', {
            replacements: {
              p_project_role_id: p_project_role_id
            }
          });
        case 6:
          res.status(200).json({
            message: 'Rol de proyecto eliminado exitosamente.'
          });
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.error('Error al eliminar el rol de proyecto:', _context9.t0);
          res.status(500).json({
            message: 'Error al eliminar el rol de proyecto.'
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 9]]);
  }));
  return function deletedProjectRoles(_x20, _x21, _x22) {
    return _ref9.apply(this, arguments);
  };
}();

// Listar roles de un proyecto
var listProjectRoles = exports.listProjectRoles = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var p_project_id, roles;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          p_project_id = req.params.p_project_id; // Obtén el ID del proyecto desde los parámetros de la solicitud
          if (p_project_id) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es obligatorio.'
          }));
        case 4:
          _context10.next = 6;
          return _Projects["default"].sequelize.query('CALL procedure_to_list_project_roles(:p_project_id)', {
            replacements: {
              p_project_id: p_project_id
            }
          });
        case 6:
          roles = _context10.sent;
          if (!(roles.length === 0)) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: 'No se encontraron roles para este proyecto.'
          }));
        case 9:
          return _context10.abrupt("return", res.status(200).json(roles));
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          console.error('Error al listar roles de proyecto:', _context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function listProjectRoles(_x23, _x24) {
    return _ref10.apply(this, arguments);
  };
}();

// Verificar si un proyecto ya existe por nombre
var checkProjectNameExists = exports.checkProjectNameExists = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var project_name, project;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          project_name = req.params.project_name;
          _context11.prev = 1;
          _context11.next = 4;
          return _Projects["default"].findOne({
            where: {
              project_name: project_name
            }
          });
        case 4:
          project = _context11.sent;
          if (!project) {
            _context11.next = 7;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            exists: true
          }));
        case 7:
          return _context11.abrupt("return", res.status(200).json({
            exists: false
          }));
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](1);
          console.error('Error al verificar el nombre del proyecto:', _context11.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 10]]);
  }));
  return function checkProjectNameExists(_x25, _x26) {
    return _ref11.apply(this, arguments);
  };
}();

// Listar los usuarios asignados a un proyecto
var listUsersAssignedToProject = exports.listUsersAssignedToProject = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var p_project_id, users;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          p_project_id = req.params.p_project_id; // Obtener el ID del proyecto de los parámetros
          if (p_project_id) {
            _context12.next = 4;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es obligatorio.'
          }));
        case 4:
          _context12.next = 6;
          return _Projects["default"].sequelize.query('CALL procedure_to_list_user_projects(:p_project_id)', {
            replacements: {
              p_project_id: p_project_id
            }
          });
        case 6:
          users = _context12.sent;
          if (!(users.length === 0)) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: 'No se encontraron usuarios asignados a este proyecto.'
          }));
        case 9:
          return _context12.abrupt("return", res.status(200).json(users));
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](0);
          console.error('Error al listar los usuarios asignados al proyecto:', _context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 12]]);
  }));
  return function listUsersAssignedToProject(_x27, _x28) {
    return _ref12.apply(this, arguments);
  };
}();

// Obtener las tareas de un proyecto específico
var getProjectAssignments = exports.getProjectAssignments = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var p_project_id, projectAssignments;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          p_project_id = req.params.p_project_id; // Obtener el ID del proyecto desde los parámetros de la ruta
          // Verificar si el ID del proyecto está presente y es válido
          if (!(!p_project_id || isNaN(p_project_id))) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es requerido y debe ser un número válido.'
          }));
        case 4:
          _context13.next = 6;
          return _Projects["default"].sequelize.query('CALL procedure_to_get_project_assignments(:p_project_id)', {
            replacements: {
              p_project_id: p_project_id
            }
          });
        case 6:
          projectAssignments = _context13.sent;
          // Enviar las tareas como respuesta
          res.status(200).json(projectAssignments);
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          console.error('Error al obtener las tareas del proyecto:', _context13.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return function getProjectAssignments(_x29, _x30) {
    return _ref13.apply(this, arguments);
  };
}();
var getProjectResults = exports.getProjectResults = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var projectId, _yield$sequelize$quer, _yield$sequelize$quer2, projectInfo, testPlans, defects, assignments, meetings;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          projectId = req.params.projectId; // Ejecutar cada consulta SQL
          _context14.next = 4;
          return _database["default"].query("\n      SELECT project_name, description, start_date, end_date, status\n      FROM Projects\n      WHERE project_id = :projectId\n    ", {
            replacements: {
              projectId: projectId
            },
            type: _database["default"].QueryTypes.SELECT
          });
        case 4:
          _yield$sequelize$quer = _context14.sent;
          _yield$sequelize$quer2 = _slicedToArray(_yield$sequelize$quer, 1);
          projectInfo = _yield$sequelize$quer2[0];
          _context14.next = 9;
          return _database["default"].query("\n      SELECT plan_name, COUNT(tc.test_case_id) AS total_test_cases,\n        SUM(tc.status = 'Passed') AS passed_test_cases,\n        SUM(tc.status = 'Failed') AS failed_test_cases\n      FROM Test_Plans tp\n      LEFT JOIN Test_Cases tc ON tp.test_plan_id = tc.test_plan_id\n      WHERE tp.project_id = :projectId\n      GROUP BY tp.plan_name\n    ", {
            replacements: {
              projectId: projectId
            },
            type: _database["default"].QueryTypes.SELECT
          });
        case 9:
          testPlans = _context14.sent;
          _context14.next = 12;
          return _database["default"].query("\n      SELECT defect_description, severity, d.status\n      FROM Defects d\n      JOIN Test_Cases tc ON d.test_case_id = tc.test_case_id\n      JOIN Test_Plans tp ON tc.test_plan_id = tp.test_plan_id\n      WHERE tp.project_id = :projectId\n    ", {
            replacements: {
              projectId: projectId
            },
            type: _database["default"].QueryTypes.SELECT
          });
        case 12:
          defects = _context14.sent;
          _context14.next = 15;
          return _database["default"].query("\n      SELECT name_task, description, status\n      FROM Project_Assignments\n      WHERE project_id = :projectId\n    ", {
            replacements: {
              projectId: projectId
            },
            type: _database["default"].QueryTypes.SELECT
          });
        case 15:
          assignments = _context14.sent;
          _context14.next = 18;
          return _database["default"].query("\n      SELECT meeting_date, meeting_start_time, meeting_end_time, meeting_status, meeting_description\n      FROM Meetings\n      WHERE project_id = :projectId\n    ", {
            replacements: {
              projectId: projectId
            },
            type: _database["default"].QueryTypes.SELECT
          });
        case 18:
          meetings = _context14.sent;
          // Enviar resultados sin duplicados ni ambigüedad
          res.json({
            projectInfo: projectInfo ? [projectInfo] : [],
            testPlans: testPlans,
            defects: defects,
            assignments: assignments,
            meetings: meetings
          });
          _context14.next = 26;
          break;
        case 22:
          _context14.prev = 22;
          _context14.t0 = _context14["catch"](0);
          console.error('Error al obtener los resultados del proyecto:', _context14.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 26:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 22]]);
  }));
  return function getProjectResults(_x31, _x32) {
    return _ref14.apply(this, arguments);
  };
}();