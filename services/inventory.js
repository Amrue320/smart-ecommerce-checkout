const express = require("express");
const router = express.Router();

let inventory = [];

router.post("/", (req, res) => {
  inventory.push(req.body);
  res.send("Item added to inventory");
});

router.get("/", (req, res) => {
  res.json(inventory);
});

router.put("/:id", (req, res) => {
  inventory[req.params.id].stock = req.body.stock;
  res.send("Inventory updated");
});

module.exports = router;