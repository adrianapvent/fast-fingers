const express = require("express");
const app = express();
const db = require("./models");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/API")(app);
require("./routes/HTML")(app);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "App Listening on PORT " + PORT + " Visit http://localhost:%s/ in your browser.", PORT
    );
  });
});