const express = require("express");

const Certificate =
require("../models/Certificate");

const auth = require("../middleware/auth");

const router = express.Router();

router.post("/issue", auth, async (req, res) => {

  const cert =
  await Certificate.create({

    userId: req.user.id,

    courseId: req.body.courseId,

    certificateNo:
      "WB-" + Date.now(),

    issueDate: new Date()

  });

  res.json(cert);

});

module.exports = router;