const Sale = require("../models/sale");
const sales = [];

exports.registerSale = (data) => {
  const { idJuego, cantidad } = data;
  const newSale = new Sale(idJuego, cantidad);
  sales.push(newSale);
  return newSale;
};

exports.getAllSales = () => {
  return sales;
};
