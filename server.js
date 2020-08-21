require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 8000;

const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");
const teacherRoutes = require("./routes/teacher");

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("Something went wrong while connecting DB"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", adminRoutes);
app.use("/api", studentRoutes);
app.use("/api", teacherRoutes);

app.listen(port, () => console.log(`Server Running at Port: ${port}`));
