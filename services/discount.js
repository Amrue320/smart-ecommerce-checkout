const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const code = req.body.code;

  if (code === "NEWYEAR") {
    res.json({ discount: "10%" });
  } else {
    res.json({ discount: "0%" });
  }
});

module.exports = router;