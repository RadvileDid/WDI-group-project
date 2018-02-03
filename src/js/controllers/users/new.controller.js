angular
  .module('vamApp')
  .controller('UsersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['$state', 'UserFactory'];

function UsersNewCtrl ($state, UserFactory) {
  const vm = this;

  vm.userNew = {};
  vm.userCreate = userCreate;

  function userCreate(){
    UserFactory
      .save(vm.userNew)
      .$promise
      .then(() => $state.go('SOMEWHERE')); // where do we want the user to go once their profile has been created? from router config
  }
}
