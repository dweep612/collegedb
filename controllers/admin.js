const Teacher = require("../models/teacher");

exports.getTeacherBySubject = (req, res) => {
  const subject = req.body.subject;

  Teacher.find(
    { subject: subject },
    {
      _id: 0,
      firstname: 1,
      lastname: 1,
      email: 1,
      mobile: 1,
      branch: 1,
      year: 1,
    }
  ).exec((err, teacher) => {
    if (err || !teacher) {
      return res.status(400).json({
        error: "Teachers not found",
      });
    }

    res.json({
      "Total No. of Teacher: ": teacher.length,
      "Detail of Teachers": teacher,
    });
  });
};
