const express = require("express");

const PORT = process.env.PORT || 3000;

const game = express();
const db = require("./models");

game.use(express.urlencoded({ extended: true }));
game.use(express.json());
game.use(express.static("public"));

require("./routes/API")(game);
require("./routes/HTML")(game);


db.sequelize.sync().then(() => {
  game.listen(PORT, () => {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});