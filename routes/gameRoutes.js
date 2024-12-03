const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gamesController");

router.post("/addGame", gameController.addGame);
router.get("/", gameController.getGames);

module.exports = router;
