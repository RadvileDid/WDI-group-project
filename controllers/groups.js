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
  addComment: addCommentRoute
};
