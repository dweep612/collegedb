require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => console.log(`Server Running at Port: ${port}`));
