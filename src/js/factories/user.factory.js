angular
  .module('vamApp')
  .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$resource'];
function UserFactory($resource) {
  return new $resource('/api/users/:id',
    { 'update': { method: 'PUT' }
    }
  );
}
