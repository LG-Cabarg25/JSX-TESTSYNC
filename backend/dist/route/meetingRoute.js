"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
var _MeetingsController = require("../controller/MeetingsController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/register', _verifyToken["default"], _MeetingsController.registerMeetigs);
router.put('/update/:p_meeting_id', _verifyToken["default"], _MeetingsController.updatedMeetings);

// Nueva ruta para obtener reuniones asignadas a un proyecto
router.get('/user/:p_user_id/meetings', _verifyToken["default"], _MeetingsController.getMeetingsByUser);
var _default = exports["default"] = router;