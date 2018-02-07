const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const movieGroups = require('../controllers/movieGroups');
const secureRoute = require('../lib/secureRoute');

// Routes go here
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/movieGroups')
  .get(movieGroups.index);

router.route('/movieGroups/:id')
  .get(movieGroups.show)
  .post(secureRoute, movieGroups.add);

router.route('/movieGroups/:id/leave')
  .delete(secureRoute, movieGroups.remove);

router.route('/movieGroups/:id/comments')
  .post(secureRoute, movieGroups.addComment);

router.route('/movieGroups/:id/comments/:commentId')
  .delete(secureRoute, movieGroups.deleteComment);

module.exports = router;
