const { Router } = require('express');
const { getProfile } = require('../controllers/user.controller');

const userRoutes = Router();

userRoutes
  .route('/profile')
  .get(getProfile);

module.exports = userRoutes;
