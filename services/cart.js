const express = require("express");
const router = express.Router();

let cart = [];

router.post("/", (req, res) => {
  cart.push(req.body);
  res.send("Item added to cart");
});

router.get("/", (req, res) => {
  res.json(cart);
});

module.exports = router;