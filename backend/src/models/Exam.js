const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    },

    title: String,

    passScore: {
      type: Number,
      default: 80
    },

    questions: [
      {
        question: String,

        options: [String],

        answer: Number
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Exam", ExamSchema);