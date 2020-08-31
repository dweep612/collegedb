const Teacher = require("../models/teacher");
const Student = require("../models/student");
const teacher = require("../models/teacher");

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

exports.studentsInstructors = (req, res) => {
  const studentName = req.body.student;

  const firstname = studentName.split(" ")[0];
  const lastname = studentName.split(" ")[1];

  Student.findOne(
    { $and: [{ firstname: firstname }, { lastname: lastname }] },
    { _id: 0, firstname: 1, lastname: 1, branch: 1, year: 1 }
  ).exec((err, student) => {
    if (err || !student) {
      return res.status(400).json({
        error: "No Student found",
      });
    }

    const { branch, year } = student;

    Teacher.find(
      { $and: [{ branch: branch }, { year: year }] },
      { _id: 0, firstname: 1, lastname: 1, subject: 1, branch: 1, year: 1 }
    ).exec((err, teacher) => {
      if (err || !teacher || teacher.length == 0) {
        return res.status(400).json({
          error: "No Lecturer/s found",
        });
      }

      res.json(teacher);
    });
  });
};

exports.instructorsStudents = (req, res) => {
  const teacherName = req.body.teacher;

  const firstname = teacherName.split(" ")[0];
  const lastname = teacherName.split(" ")[1];

  Teacher.findOne(
    { $and: [{ firstname: firstname }, { lastname: lastname }] },
    { _id: 0, firstname: 1, lastname: 1, subject: 1, branch: 1, year: 1 }
  ).exec((err, teacher) => {
    if (err || !teacher) {
      return res.status(400).json({
        error: "No Lecturer found",
      });
    }

    const { branch, year } = teacher;

    Student.find(
      { $and: [{ branch: branch }, { year: year }] },
      { _id: 0, firstname: 1, lastname: 1, branch: 1, year: 1 }
    ).exec((err, student) => {
      if (err || !student || student.length == 0) {
        return res.status(400).json({
          error: "No Student/s found",
        });
      }

      res.json(student);
    });
  });
};
