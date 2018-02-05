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
    // .populate('users') => this needs to be added
    .exec()
    .then((group) => {
      if(!group) return res.notFound();
      // here we are adding 'group' to the locals object after res.render
      return res.render('groups/show', { group });
    })
    .catch(next);
}


module.exports = {
  index: groupsIndex,
  show: groupsShow
};
