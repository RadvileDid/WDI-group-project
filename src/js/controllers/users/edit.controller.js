angular
  .module('vamApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$state', 'UserFactory', '$rootScope', '$scope'];

function UsersEditCtrl($state, UserFactory, $rootScope, $scope) {
  const vm = this;

  vm.user = UserFactory.get($state.params);
  vm.userUpdate = userUpdate;

  function userUpdate(){
    UserFactory
    .update($state.params, vm.user)
    .$promise
    .then(() => $state.go('usersShow', $state.params)); //this
  }

  $rootScope.$on('uploadedImage', (e, data) => {
    vm.user.image = data.file.url;
    $scope.$apply();
  });
}
