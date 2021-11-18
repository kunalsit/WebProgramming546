const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("display/form");
});

router.post("/", (req, res) => {
  res.render("display/form");
});

module.exports = router;
