const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        message: "Email Exists"
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash
    });

    res.json(user);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User Not Found"
    });
  }

  const ok = await bcrypt.compare(
    password,
    user.password
  );

  if (!ok) {
    return res.status(400).json({
      message: "Wrong Password"
    });
  }

if (!user.approved && user.role !== "admin") {
  return res.status(403).json({
    message: "관리자 승인 대기중"
  });
}

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  res.json({
    token,
    user
  });
});

module.exports = router;