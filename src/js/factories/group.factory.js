angular
  .module('vamApp')
  .factory('Group', Group)
  .factory('MovieComment', MovieComment);

Group.$inject = ['$resource'];

function Group($resource) {
  return new $resource('/api/users/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    joinGroup: { method: 'POST', url: '/api/groups/:id/join' },
    leaveGroup: { method: 'DELETE', url: '/api/groups/:id/leave' }
  }
  );
}

MovieComment.$inject = ['$resource'];
function MovieComment($resource) {
  return new
  $resource('/api/groups/:id/comments/:commentId', { id: '@id', commentId: '@commentId' }, {
    update: { method: 'PUT' }
  });
}
