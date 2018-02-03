angular
  .module('vamApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$state', 'User'];

function UsersShowCtrl($state, User) {
  const vm = this;

  vm.user = User.get($state.params);
  vm.userDelete = userDelete;

  function userDelete(){
    User.delete($state.params)
      .$promise
      .then(() => {
        $state.go('SOMEWHERE'); // where do we want the user to go once their profile has been deleted? from router config
      });
  }
}
