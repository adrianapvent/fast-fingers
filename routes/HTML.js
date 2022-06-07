const { append } = require("express/lib/response");
var path = require("path");
// Routes
module.exports = function(game) {
    // loads index.html
    game.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}