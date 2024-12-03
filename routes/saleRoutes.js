const express = require("express");
const router = express.Router();
const saleController = require("../controllers/salesController");

router.post("/registerSale", saleController.registerSale);
router.get("/", saleController.getSales);

module.exports = router;
