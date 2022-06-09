const express = require("express");
const app = express();
const db = require("./models");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./routes');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// .env
const dotenv = require("dotenv");
const { Sequelize } = require("./models");
dotenv.config();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);
require("./routes/API")(app);
require("./routes/HTML")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "App Listening on PORT " + PORT + " Visit http://localhost:%s/ in your browser.", PORT
    );
  });
});