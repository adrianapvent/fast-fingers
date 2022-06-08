// require model dir
const db = require("../models");
// Routes
module.exports = function (game) {
    // Get Route for returning words based on difficulty
    game.get("/api/Typing/difficulty/:difficulty", function (req, res) {
        db.typing.findAll({
            where: {
                difficulty: req.params.difficulty
            }
        }).then(function(dbTyping) {
            res.json(dbTyping);
        });
    });
    // Get Route for PLAYERS in top 5 high scores
    game.get("/api/player/score", function (req, res) {
        db.Score.findAll({
            order: [["score", "description"]],
            limit: 5
        }).then(function (dbScore) {
            res.json(dbScore);
        });
    });
    // Post Route for saving PLAYER name + score
    game.post("/api/player", function (req, res) {
        db.Score.create({
            player: req.body.player,
            score: req.body.score
        }).then(function (dbPlayer) {
            res.json(dbPlayer);
        });
    });
};