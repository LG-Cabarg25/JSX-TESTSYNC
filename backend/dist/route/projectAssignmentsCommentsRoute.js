"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _ProjectAssignmentsCommentsController = require("../controller/ProjectAssignmentsCommentsController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/register', _verifyToken["default"], _ProjectAssignmentsCommentsController.registerProjectAssignmentsComments);
router.put('/update/:p_project_assignments_comments_id', _verifyToken["default"], _ProjectAssignmentsCommentsController.updatedProjectAssignmentsComments);
router["delete"]('/delete/:p_project_assignments_comments_id', _verifyToken["default"], _ProjectAssignmentsCommentsController.deletedProjectAssignmentsComments);
router.get('/comments/:p_assignment_id', _verifyToken["default"], _ProjectAssignmentsCommentsController.fetchProjectAssignmentsComments);
var _default = exports["default"] = router;