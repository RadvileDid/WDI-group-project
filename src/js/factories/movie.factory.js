angular
  .module('vamApp')
  .factory('MovieGroup', MovieGroup);

MovieGroup.$inject = ['$resource'];
function MovieGroup($resource) {
  return new $resource('/api/movieGroups/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    addUser: { method: 'POST', url: '/api/movieGroups/:id/' },
    leaveMovie: { method: 'DELETE', url: '/api/movieGroups/:id/leave' },
    addComment: { method: 'POST', url: '/api/movies/:id/comments/:commentId'}
  });
}
