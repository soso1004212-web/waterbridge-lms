const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    thumbnail: String,

    videoUrl: String,

    pdfUrl: String,

    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Course", CourseSchema);