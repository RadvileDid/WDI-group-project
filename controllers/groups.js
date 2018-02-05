const Group = require('../models/group');

function groupsShow(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if (!group) return res.notFound();
      return res.status(200).json(group);
    })
    .catch(next);
}

module.exports = {
  show: groupsShow
};
