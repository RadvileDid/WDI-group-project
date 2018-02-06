angular
  .module('vamApp')
  .factory('Group', Group);

Group.$inject = ['$resource'];

function Group($resource) {
  return new $resource('/api/groups/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    joinGroup: { method: 'POST', url: '/api/groups/:id/join' },
    leaveGroup: { method: 'DELETE', url: '/api/groups/:id/leave' }
  }
  );
}
