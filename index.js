const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    "about": "Titanic API",
    "version": "v1",
  });
});

app.get("/people", (req, res) => {
  return res.json({
    people: [],
  });
});

exports = module.exports = app;
