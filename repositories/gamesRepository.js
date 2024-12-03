const Game = require("../models/game");
const games = [];
let id = 1;

exports.addGame = (data) => {
  const { nombre, categoria, precio, stock } = data;
  const newGame = new Game(id++, nombre, categoria, precio, stock);
  games.push(newGame);
  return newGame;
};

exports.getAllGames = () => {
  return games;
};

exports.getGameById = (id) => games.find((game) => game.id === id);

exports.updateGameStocks = (data) => {
  const { id, cantidad } = data;
  const game = games.find((game) => game.id === id);
  if (game) {
    game.stock -= cantidad;
    return true;
  }
  return false;
};
