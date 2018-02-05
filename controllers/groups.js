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
      return res.status(200).json(group);
    })
    .catch(next);
}

function groupsAddUser(req, res, next) {

  const userId = req.user.id;

  Group
    .findById(req.params.id)
    .exec()
    .then((group) => {
      if(!group) return res.notFound();

      group.users.push(userId);

      return group.save();
    })
    .then((group) => {
      return res.json(group);
    })
    .catch(next);
}


module.exports = {
  index: groupsIndex,
  show: groupsShow,
  add: groupsAddUser
};
