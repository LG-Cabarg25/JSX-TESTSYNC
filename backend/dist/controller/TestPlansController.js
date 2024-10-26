"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTestPlan = exports.registerTestPlan = exports.getTestPlansByUser = exports.getTestPlansByProject = exports.deleteTestPlan = void 0;
var _TestPlans = _interopRequireDefault(require("../model/TestPlans.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Registrar un plan de pruebas
var registerTestPlan = exports.registerTestPlan = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, p_project_id, p_user_id, p_plan_name, p_plan_type, p_description, p_start_date, p_end_date, p_status, p_document, documentUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("Datos recibidos en el body:", req.body);
          console.log("Archivo recibido:", req.file);
          _req$body = req.body, p_project_id = _req$body.p_project_id, p_user_id = _req$body.p_user_id, p_plan_name = _req$body.p_plan_name, p_plan_type = _req$body.p_plan_type, p_description = _req$body.p_description, p_start_date = _req$body.p_start_date, p_end_date = _req$body.p_end_date, p_status = _req$body.p_status; // Validación de campos obligatorios
          if (!(!p_project_id || !p_user_id || !p_plan_name || !p_status)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'Todos los campos obligatorios deben ser completados'
          }));
        case 6:
          // Verificar si se cargó un archivo
          p_document = req.file ? req.file.filename : null; // Almacena solo el nombre del archivo
          console.log("Documento recibido:", p_document);

          // Validar que el archivo haya sido cargado
          if (p_document) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'El documento del plan de pruebas es obligatorio'
          }));
        case 10:
          // Crear la URL del documento
          documentUrl = "https://testsync-backend.online/uploads/".concat(p_document); // Usa solo el nombre del archivo
          // Ejecutar el procedimiento almacenado para registrar un plan de pruebas
          _context.next = 13;
          return _TestPlans["default"].sequelize.query('CALL procedure_to_register_test_plans(:p_project_id, :p_user_id, :p_plan_name, :p_plan_type, :p_description, :p_start_date, :p_end_date, :p_document, :p_status)', {
            replacements: {
              p_project_id: p_project_id,
              p_user_id: p_user_id,
              p_plan_name: p_plan_name,
              p_plan_type: p_plan_type,
              p_description: p_description,
              p_start_date: p_start_date,
              p_end_date: p_end_date,
              p_document: p_document,
              p_status: p_status
            }
          });
        case 13:
          res.status(201).json({
            message: 'Plan de pruebas registrado exitosamente',
            document_url: documentUrl
          });
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error('Error al registrar el plan de pruebas:', _context.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function registerTestPlan(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Obtener planes de pruebas por proyecto
var getTestPlansByProject = exports.getTestPlansByProject = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var p_project_id, testPlans, plansWithUrls;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          p_project_id = req.params.p_project_id;
          if (!(!p_project_id || isNaN(p_project_id))) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'El ID del proyecto es requerido y debe ser un número válido.'
          }));
        case 4:
          _context2.next = 6;
          return _TestPlans["default"].sequelize.query('CALL procedure_to_get_test_plans(:p_project_id)', {
            replacements: {
              p_project_id: p_project_id
            }
          });
        case 6:
          testPlans = _context2.sent;
          if (!(!testPlans || testPlans.length === 0)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(200).json([]));
        case 9:
          // Agregar URL del documento a cada plan
          plansWithUrls = testPlans.map(function (plan) {
            return _objectSpread(_objectSpread({}, plan), {}, {
              document_url: "https://testsync-backend.online/uploads/".concat(plan.document) // Usa solo el nombre del archivo aquí
            });
          });
          return _context2.abrupt("return", res.status(200).json(plansWithUrls));
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.error('Error al obtener los planes de pruebas:', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getTestPlansByProject(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Actualizar un plan de pruebas
var updateTestPlan = exports.updateTestPlan = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var p_test_plan_id, _req$body2, p_status, p_plan_type, p_description, p_document;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          p_test_plan_id = req.params.p_test_plan_id;
          _req$body2 = req.body, p_status = _req$body2.p_status, p_plan_type = _req$body2.p_plan_type, p_description = _req$body2.p_description;
          if (!(!p_test_plan_id || isNaN(p_test_plan_id))) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'El ID del plan de pruebas es requerido y debe ser un número válido.'
          }));
        case 5:
          p_document = req.file ? req.file.path : null; // Solo obtén el documento si está presente
          _context3.next = 8;
          return _TestPlans["default"].sequelize.query('CALL procedure_to_update_test_plans(:p_test_plan_id, :p_plan_type, :p_description, :p_document, :p_status)', {
            replacements: {
              p_test_plan_id: p_test_plan_id,
              p_plan_type: p_plan_type || null,
              p_description: p_description || null,
              p_document: p_document ? "https://testsync-backend.online/uploads/".concat(p_document.split('\\').join('/')) : null,
              p_status: p_status || null // Cambiado para evitar 'undefined'
            }
          });
        case 8:
          res.status(200).json({
            message: 'Plan de pruebas actualizado exitosamente'
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al actualizar el plan de pruebas:', _context3.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function updateTestPlan(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// Eliminar un plan de pruebas
var deleteTestPlan = exports.deleteTestPlan = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var p_test_plan_id;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          p_test_plan_id = req.params.p_test_plan_id;
          if (!(!p_test_plan_id || isNaN(p_test_plan_id))) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'El ID del plan de pruebas es requerido y debe ser un número válido.'
          }));
        case 4:
          _context4.next = 6;
          return _TestPlans["default"].sequelize.query('CALL procedure_to_delete_test_plan(:p_test_plan_id)', {
            replacements: {
              p_test_plan_id: p_test_plan_id
            }
          });
        case 6:
          res.status(200).json({
            message: 'Plan de pruebas eliminado exitosamente'
          });
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error('Error al eliminar el plan de pruebas:', _context4.t0);
          res.status(500).json({
            message: 'Error interno del servidor.'
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteTestPlan(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// Obtener planes de pruebas por usuario
var getTestPlansByUser = exports.getTestPlansByUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var userId, testPlans;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          userId = req.user.user_id; // Asegúrate de que esto está bien
          _context5.next = 4;
          return _TestPlans["default"].sequelize.query('CALL procedure_to_get_test_plans_by_user(:p_user_id)', {
            replacements: {
              p_user_id: userId
            }
          });
        case 4:
          testPlans = _context5.sent;
          return _context5.abrupt("return", res.status(200).json(testPlans));
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error('Error al obtener los planes de pruebas:', _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: 'Error interno del servidor.'
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function getTestPlansByUser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();