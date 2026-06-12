require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const courseRoutes = require("./routes/courses");
const examRoutes = require("./routes/exams");
const certificateRoutes = require("./routes/certificates");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/certificates", certificateRoutes);

app.get("/", (req, res) => {
  res.send("WaterBridge LMS API Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running : ${process.env.PORT}`);
});