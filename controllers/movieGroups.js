const MovieGroup = require('../models/movieGroup');

function movieGroupsIndex(req, res, next) {
  MovieGroup
    .find()
    .exec()
    .then(groups => {
      if (!groups) return res.notFound();
      return res.status(200).json(groups);
    })
    .catch(next);
}

function movieGroupsShow(req, res, next) {
  MovieGroup
    .find({ movieId: req.params.id}) //change
    .populate('comments.createdBy users') ///?
    // .populate('users') => this needs to be added
    .exec()
    .then((group) => {
      if(!group) return res.notFound();
      // here we are adding 'movie' to the locals object after res.render
      return res.status(200).json(group);
    })
    .catch(next);
}

function movieGroupsAddUser(req, res, next) {
  MovieGroup
    .find({ movieId: req.params.id})
    .exec()
    .then(group => {
      if (group.length !== 0) {
        // if there is a group for the movie, add current user id into users for the group
        group[0].users.push(req.user.id);
        return group[0].save();
      } else {
        // if there is no group for this movie, create one
        return MovieGroup
          .create({
            users: [req.user.id],
            movieId: req.params.id
          });
      }
    })
    .then(group => res.status(200).json(group))
    .catch(next);
}

function addCommentRoute(req, res, next) {
  req.body.createdBy = req.currentUser;

  MovieGroup
    .findById(req.params.id)
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      const comment = group.comments.create(req.body);
      group.comments.push(comment);

      return group.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

module.exports = {
  index: movieGroupsIndex,
  show: movieGroupsShow,
  add: movieGroupsAddUser,
  addComment: addCommentRoute
};
