const express = require("express");

const Course = require("../models/Course");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post("/", auth, admin, async (req, res) => {

  const course = await Course.create(req.body);

  res.json(course);

});

router.delete("/:id", auth, admin, async (req, res) => {

  await Course.findByIdAndDelete(req.params.id);

  res.json({
    success: true
  });

});

module.exports = router;