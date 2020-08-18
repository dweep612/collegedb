const Student = require("../models/student");

exports.insertStudent = (req, res) => {
  const student = new Student(req.body);

  student.save((err, student) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save student in DB",
      });
    }

    res.json(student);
  });
};
