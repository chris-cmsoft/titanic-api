const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    "about": "Titanic API",
    "version": "v1",
  });
});

exports = module.exports = app
