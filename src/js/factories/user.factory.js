angular
  .module('vamApp')
  .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$resource'];
function UserFactory($resource) {
  return new $resource('/api/users/:id', { id: '@id' },
    { update: { method: 'PUT' }
    }
  );
}
