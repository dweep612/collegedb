const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },

    lastname: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    address: {
      type: String,
      maxlength: 250,
      required: true,
    },

    mobile: {
      type: Number,
      trim: true,
      required: true,
    },

    qualification: {
      type: String,
      maxlength: 50,
      required: true,
    },

    runningedu: {
      type: String,
      maxlength: 50,
    },

    subject: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },

    branch: {
      type: String,
      maxlength: 32,
      required: true,
    },

    year: {
      type: String,
      maxlength: 32,
      trim: true,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
