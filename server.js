const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const helpers = require('./utils/helpers');
const path = require('path');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const ONE_SECOND = 1000;
const ONE_MINUTE = 1000 * 60;
const ONE_HOUR = 1000 * 60 * 60;

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookies: {
    // stored in milliseconds (86400 === 1 day)
    maxAge: ONE_MINUTE * 5,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});