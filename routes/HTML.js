const { append } = require("express/lib/response");
var path = require("path");

// Routes
module.exports = function(app) {

    // loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}