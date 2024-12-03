const gameRepo = require("../repositories/gamesRepository");
const { validateGame } = require("../utils/validator");

exports.addGame = (data) => {
  const validatedGame = validateGame(data);
  if (!validatedGame.isValid) throw new Error(validatedGame.errorMsg);

  return gameRepo.addGame(data);
};

exports.getAllGames = () => {
  return gameRepo.getAllGames();
};
