const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  return res.json({
    "about": "Titanic API",
    "version": "v1",
  });
});

app.listen(port, () => {
  console.log(`Titanic API listening on port ${port}`);
});
