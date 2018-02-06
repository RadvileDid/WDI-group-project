const Group = require('../models/group');

function groupsIndex(req, res, next) {
  Group
    .find()
    .exec()
    .then(groups => {
      if (!groups) return res.notFound();
      return res.status(200).json(groups);
    })
    .catch(next);
}

function groupsShow(req, res, next) {
  Group
    .findById(req.params.id)
    .populate('comments.createdBy')
    // .populate('users') => this needs to be added
    .exec()
    .then((group) => {
      if(!group) return res.notFound();
      // here we are adding 'group' to the locals object after res.render
      return res.status(200).json(group);
    })
    .catch(next);
}

function groupsAddUser(req, res, next) {
  // const userId = req.user.id;
  //
  // Group
  //   .findById(req.params.id)
  //   .exec()
  //   .then((group) => {
  //     if(!group) return res.notFound();
  //
  //     group.users.push(userId);
  //
  //     return group.save();
  //   })
  //   .then((group) => {
  //     return res.json(group);
  //   })
  //   .catch(next);

  Group
    .find({ movie.id : req.params.id }) // req.params.id === movie id
    .exec()
    .then(group => {
      // a group has been returned, add current users id to array of users for the group
      // if no group has been found, create a new group passing in current users id into new group

      if (group) {
        group.users.push(req.user.id);
        return group.save();
      } else {
        return Group
          .create({
            users: [req.user.id],
            movieId: req.params.id
          })
      }
    })
    .then(group => res.status(204).json(group))
    .catch(next);
}

function addCommentRoute(req, res, next) {

  req.body.createdBy = req.currentUser;

  Group
    .findById(req.params.id)
    .exec()
    .then((movie) => {
      if(!movie) return res.notFound();

      const comment = movie.comments.create(req.body);
      movie.comments.push(comment);

      return movie.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

module.exports = {
  index: groupsIndex,
  show: groupsShow,
  add: groupsAddUser,
  addComment: addCommentRoute
};
