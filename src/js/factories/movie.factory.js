angular
  .module('vamApp')
  .factory('MovieGroup', MovieGroup);

MovieGroup.$inject = ['$resource'];
function MovieGroup($resource) {
  return new $resource('/api/movieGroups/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    addUser: { method: 'POST', url: '/api/movieGroups/:id/' },
    leaveMovieGroup: { method: 'DELETE', url: '/api/movieGroups/:id/leave' },
    addComment: { method: 'POST', url: '/api/movieGroups/:id/comments'},
    deleteComment: { method: 'DELETE', url: '/api/movieGroups/:id/comments/:commentId' }
  });
}
