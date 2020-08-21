const express = require("express");
const router = express.Router();

const { getTeacherBySubject } = require("../controllers/admin");

router.get("/admin/teacher/subject", getTeacherBySubject);

module.exports = router;
