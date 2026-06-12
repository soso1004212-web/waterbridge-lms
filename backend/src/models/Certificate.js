const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    },

    certificateNo: String,

    issueDate: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Certificate",
  CertificateSchema
);