const express = require("express");
const app = express();
const db = require("./models");
const handlebars = require('express-handlebars');

const dotenv = require("dotenv");
const res = require("express/lib/response");
dotenv.config();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/API")(app);
require("./routes/HTML")(app);

// const hbs = exphbs.create({ helpers });
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir:`${__dirname}/views/layouts`
}));


app.get('/', (req.res) => {
  res.render('main', {layout: 'index'});
});


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "App Listening on PORT " + PORT + " Visit http://localhost:%s/ in your browser.", PORT
    );
  });
});