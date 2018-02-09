angular
  .module('vamApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = [ 'UserFactory'];
function UsersIndexCtrl(UserFactory) {
  const vm = this;
  vm.all = UserFactory.query();
}
