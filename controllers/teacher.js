const Teacher = require("../models/teacher");

exports.insertTeacher = (req, res) => {
  const teacher = new Teacher(req.body);

  teacher.save((err, teacher) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save teacher in DB",
      });
    }

    res.json(teacher);
  });
};
