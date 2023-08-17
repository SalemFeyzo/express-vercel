// Add Express
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/another-route", (req, res) => {
  res.send("Another route");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
