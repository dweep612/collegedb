const express = require("express");
const router = express.Router();

const {
  getTeacherBySubject,
  whatTeach,
  studentsInstructors,
  instructorsStudents,
} = require("../controllers/admin");

router.get("/admin/teacher/subject", getTeacherBySubject);
router.get("/admin/teacher/teach", whatTeach);
router.get("/admin/instructors", studentsInstructors);
router.get("/admin/students", instructorsStudents);

module.exports = router;
