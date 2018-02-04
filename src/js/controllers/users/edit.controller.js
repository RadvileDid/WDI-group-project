angular
  .module('vamApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$state', 'UserFactory'];

function UsersEditCtrl($state, UserFactory) {
  const vm = this;

  vm.user = UserFactory.get($state.params);
  vm.userUpdate = userUpdate;

  function userUpdate(){
    UserFactory
      .update($state.params, vm.user)
      .$promise
      .then(() => {
        $state.go('usersShow'); // go to users profile once their profile has been updated. from router config
      });
  }


}
