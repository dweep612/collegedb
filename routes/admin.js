const express = require("express");
const router = express.Router();

const { getTeacherBySubject, whatTeach } = require("../controllers/admin");

router.get("/admin/teacher/subject", getTeacherBySubject);
router.get("/admin/teacher/teach", whatTeach);

module.exports = router;
