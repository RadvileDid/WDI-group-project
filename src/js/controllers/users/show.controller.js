angular
  .module('vamApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$state', 'UserFactory'];

function UsersShowCtrl($state, UserFactory) {
  const vm = this;

  vm.user = UserFactory.get($state.params);
  vm.userDelete = userDelete;

  function userDelete(){
    UserFactory
      .delete($state.params)
      .$promise
      .then(() => {
        $state.go('SOMEWHERE'); // where do we want the user to go once their profile has been deleted? from router config
      });
  }
}
