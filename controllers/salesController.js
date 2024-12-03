const saleService = require("../services/salesService");

exports.registerSale = (req, res) => {
  try {
    const newSale = saleService.registerSale(req.body);
    res.status(201).json(newSale);
  } catch (error) {
    res.status(500).json({ errorMsg: error.message });
  }
};

exports.getSales = (req, res) => {
  try {
    const sales = saleService.getSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ errorMsg: error.message });
  }
};
