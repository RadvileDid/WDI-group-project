const User = require('../models/user');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next)
}
