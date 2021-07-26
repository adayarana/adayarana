const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('server');
const express = require('express');
const morgan = require('morgan');

const passport = require('passport');

require('dotenv').config();

require('./src/config/ddbb.config');
require('./src/passport/jwt.strategy');
require('./src/passport/local.strategy');

const routes = require('./src/routes/coin.routes');
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');

const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/coin-app', routes);
server.use('/coin-app', authRoutes);
server.use(
  '/coin-app/user',
  passport.authenticate('jwt', { session: false }),
  userRoutes
);

server.listen(port, () => debug(`Server is running in ${chalk.blue(`http://localhost:${port}`)}`));
