const express = require('express');
const app = express();
const path = require('path');
const helpers = require('./utils/hbsHelpers');
const session = require('express-session');
const sequelize = require('./config/connection');
const hbs = require('express-handlebars').create({ helpers });

const PORT = process.env.PORT || 5000;

// Setup express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up express-sessions
app.use(session(require('./config/session')));

// Set up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//Custom middleware
app.use(require('./middleware/hbs'));

// Set up routes
app.use(require('./controllers'));

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});
