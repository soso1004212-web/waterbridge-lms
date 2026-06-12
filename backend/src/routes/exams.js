const express = require("express");

const Exam = require("../models/Exam");
const Result = require("../models/Result");
const Certificate = require("../models/Certificate");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post("/", auth, admin, async (req, res) => {

  const exam = await Exam.create(req.body);

  res.json(exam);

});

router.get("/:courseId", auth, async (req, res) => {

  const exam = await Exam.findOne({
    courseId: req.params.courseId
  });

  res.json(exam);

});


router.post(
  "/submit/:examId",
  auth,
  async (req, res) => {

    try {

      const exam =
        await Exam.findById(req.params.examId);

      if (!exam) {
        return res.status(404).json({
          message: "시험 없음"
        });
      }

      const answers = req.body.answers;

      let correct = 0;

      answers.forEach((answer, index) => {

        if (
          answer === exam.questions[index].answer
        ) {
          correct++;
        }

      });

      const score = Math.round(
        (correct / exam.questions.length) * 100
      );

      const passed =
        score >= exam.passScore;

      const result =
  await Result.create({
    userId: req.user.id,
    examId: exam._id,
    score,
    passed
  });

if (passed) {

  const existingCert =
    await Certificate.findOne({
      userId: req.user.id,
      courseId: exam.courseId
    });

  if (!existingCert) {

    await Certificate.create({

      userId: req.user.id,

      courseId: exam.courseId,

      certificateNo:
        "WB-" + Date.now(),

      issueDate: new Date()

    });

  }

}

res.json({
  success: true,
  score,
  passed,
  result
});

    } catch (err) {

      res.status(500).json({
        message: err.message
      });

    }

  }
);


module.exports = router;