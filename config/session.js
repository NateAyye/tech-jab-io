require('dotenv').config();
const sequelize = require('../config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

module.exports = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true, // The cookie only accessible by the web server
    secure: false, // The cookie only accessible with HTTPS
    sameSite: 'strict', // The cookie only sent with requests to the same domain
  },
  resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: true, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
  store: new SequelizeStore({ // Store session data in the Sequelize db
    db: sequelize // Connection instance
  })
}