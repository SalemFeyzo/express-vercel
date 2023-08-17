// Add Express
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({
    status: res.statusCode,
    anotherRoute: `http://${req.get("host")}/another-route`,
  });
});
app.get("/another-route", (req, res) => {
  res.json({
    status: res.statusCode,
    baseRoute: `http://${req.get("host")}`,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
