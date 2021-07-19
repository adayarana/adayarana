const passport = require('passport');
const { Router } = require('express');
const {
  signup,
  login,
  getToken,
  logout
} = require('../controllers/auth.controller');

const authRoutes = Router();

authRoutes
  .post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    signup
  );

authRoutes
  .post(
    '/login',
    login
  );

authRoutes
  .post(
    '/token',
    getToken
  );

authRoutes
  .post(
    '/logout',
    logout
  );

module.exports = authRoutes;
