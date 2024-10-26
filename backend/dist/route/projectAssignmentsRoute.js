"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _ProjectAssignmentsController = require("../controller/ProjectAssignmentsController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/register', _verifyToken["default"], _ProjectAssignmentsController.registerProjectAssignments);
router.put('/update/:p_assignment_id', _verifyToken["default"], _ProjectAssignmentsController.updatedProjectAssignments);
router["delete"]('/delete/:p_assignment_id', _verifyToken["default"], _ProjectAssignmentsController.deletedProjectAssignments);
var _default = exports["default"] = router;