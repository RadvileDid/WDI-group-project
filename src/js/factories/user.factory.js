angular
  .module('vamApp')
  .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$resource']; //'API'
function UserFactory($resource) {
  return new $resource('api/users/:id', //${API}
    { id: '@_id'},
    { 'update': { method: 'PUT' }
    }
  );
}
