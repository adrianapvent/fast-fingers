const express = require("express");
const app = express();
const db = require("./models");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./routes');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);
require("./routes/API")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "App Listening on PORT " + PORT + " Visit http://localhost:%s/ in your browser.", PORT
    );
  });
});