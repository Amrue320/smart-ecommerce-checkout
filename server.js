const express = require("express");
const app = express();

app.use(express.json());

const inventory = require("./services/inventory");
const cart = require("./services/cart");
const payment = require("./services/payment");
const discount = require("./services/discount");

app.use("/inventory", inventory);
app.use("/cart", cart);
app.use("/payment", payment);
app.use("/discount", discount);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});