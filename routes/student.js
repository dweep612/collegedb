const express = require("express");
const router = express.Router();

const { insertStudent } = require("../controllers/student");

router.post("/student/insert", insertStudent);

module.exports = router;
