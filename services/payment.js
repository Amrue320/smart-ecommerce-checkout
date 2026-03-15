const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Payment processed successfully");
});

module.exports = router;