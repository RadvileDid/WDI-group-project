angular
  .module('vamApp')
  .factory('GroupFactory', GroupFactory);

GroupFactory.$inject = ['$resource'];

function GroupFactory($resource) {
  return new $resource('/api/users/:id', { id: '@id' },
    { update: { method: 'PUT' }
    }
  );
}
}
