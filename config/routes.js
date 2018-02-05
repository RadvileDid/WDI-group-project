const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const groups = require('../controllers/groups');
const secureRoute = require('../lib/secureRoute');

// Routes go here
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/groups')
  .get(groups.index);

module.exports = router;
