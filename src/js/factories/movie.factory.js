angular
  .module('vamApp')
  .factory('Movie', Movie)
  .factory('MovieComment', MovieComment);

Movie.$inject = ['$resource'];

function Movie($resource) {
  return new $resource('/api/movies/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    joinMovie: { method: 'POST', url: '/api/movies/:id/' },
    leaveMovie: { method: 'DELETE', url: '/api/movies/:id/leave' }
  }
  );
}

MovieComment.$inject = ['$resource'];
function MovieComment($resource) {
  return new
  $resource('/api/movies/:id/comments/:commentId', { id: '@id', commentId: '@commentId' }, {
    update: { method: 'PUT' }
  });
}
