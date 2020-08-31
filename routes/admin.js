const express = require("express");
const router = express.Router();

const {
  getTeacherBySubject,
  whatTeach,
  studentsInstructors,
} = require("../controllers/admin");

router.get("/admin/teacher/subject", getTeacherBySubject);
router.get("/admin/teacher/teach", whatTeach);
router.get("/admin/instructors", studentsInstructors);

module.exports = router;
