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
    if (err || !teacher || teacher.length == 0) {
      return res.status(400).json({
        error: "No Lecturer/s found",
      });
    }

    res.json({
      "Total No. of Teacher: ": teacher.length,
      "Detail of Teachers": teacher,
    });
  });
};

exports.whatTeach = (req, res) => {
  const name = req.body.name;
  // const firstname = req.body.firstname;

  const firstname = name.split(" ")[0];
  const lastname = name.split(" ")[1];

  Teacher.find(
    { $and: [{ firstname: firstname }, { lastname: lastname }] },
    { _id: 0, firstname: 1, lastname: 1, subject: 1, branch: 1, year: 1 }
  ).exec((err, teacher) => {
    if (err || !teacher || teacher.length == 0) {
      return res.status(400).json({
        error: "No Lecturer/s found",
      });
    }

    res.json(teacher);
  });
};
