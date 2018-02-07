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
    .findOne({ movieId: req.params.id}) //change
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
    .then(group => {
      return MovieGroup.populate(group, { path: 'users'});
    })
    .then(group => res.status(200).json(group))
    .catch(next);
}

function movieGroupsRemoveUser(req, res, next) {
  MovieGroup
    .findOne({ movieId: req.params.id})
    .exec()
    .then(group => {
      if (!group) return res.notFound();
      console.log('Group users =>', group.users);
      const index = group.users.indexOf(req.user.id);
      group.users.splice(index, 1);
      return group.save();
    })
    .then(group => {
      return MovieGroup.populate(group, { path: 'users'});
    })
    .then(group => res.status(200).json(group))
    .catch(next);
}

function addCommentRoute(req, res, next) {
  console.log('here');
  req.body.createdBy = req.user;

  MovieGroup
    .findOne({ movieId: req.params.id})
    .exec()
    .then((group) => {
      console.log(group);
      if(!group) return res.notFound(); // make comments hidden for no group

      const comment = group.comments.create(req.body);
      group.comments.push(comment);
      group.save();

      return comment;
    })
    .then((comment) => res.json(comment))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  console.log('here');
  req.body.createdBy = req.user;

  MovieGroup
    .findOne({ movieId: req.params.id})
    .exec()
    .then((group) => {
      console.log(group);
      if(!group) return res.notFound(); // make comments hidden for no group

      const comment = group.comments.id(req.params.commentId);
      comment.remove();

      group.save();

      return comment;
    })
    .then((comment) => res.json(comment))
    .catch(next);
}



module.exports = {
  index: movieGroupsIndex,
  show: movieGroupsShow,
  add: movieGroupsAddUser,
  remove: movieGroupsRemoveUser,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
