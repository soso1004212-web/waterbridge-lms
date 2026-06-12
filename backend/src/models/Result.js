const express = require("express");

const Exam = require("../models/Exam");
const Result = require("../models/Result");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam"
    },

    score: Number,

    passed: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Result", ResultSchema);