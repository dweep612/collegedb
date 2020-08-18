const express = require("express");
const router = express.Router();

const { insertTeacher } = require("../controllers/teacher");

router.post("/teacher/insert", insertTeacher);

module.exports = router;
