const gameService = require("../services/gamesService");

exports.addGame = (req, res) => {
  try {
    const newGame = gameService.addGame(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ errorMsg: error.message });
  }
};

exports.getGames = (req, res) => {
  try {
    const games = gameService.getAllGames();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ errorMsg: error.message });
  }
};
