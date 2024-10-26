"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _TestCasesController = require("../controller/TestCasesController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/register', _verifyToken["default"], _TestCasesController.registerTestCase);
router.put('/update/:p_test_case_id', _verifyToken["default"], _TestCasesController.updateTestCase);
router.get('/test-plan/:test_plan_id/cases', _verifyToken["default"], _TestCasesController.getTestCasesByTestPlan);
var _default = exports["default"] = router;