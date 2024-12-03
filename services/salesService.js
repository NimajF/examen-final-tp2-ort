const saleRepo = require("../repositories/salesRepository");
const gameRepo = require("../repositories/gamesRepository");
const { validateSale } = require("../utils/validator");

exports.registerSale = (data) => {
  const foundGame = gameRepo.getGameById(data.idJuego);
  const validatedSale = validateSale(data, foundGame);
  if (!validatedSale.isValid) throw new Error(validatedSale.errorMsg);
  gameRepo.updateGameStocks(data.idJuego, data.cantidad);
  return saleRepo.registerSale(data);
};

exports.getSales = () => saleRepo.getAllSales();
