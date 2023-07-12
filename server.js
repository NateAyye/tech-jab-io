const express = require('express');
const app = express();
const path = require('path');
const helpers = require('./utils/hbsHelpers');
const session = require('express-session');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 5000;

const hbs = require('express-handlebars').create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(require('./config/session')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Set up routes
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});
