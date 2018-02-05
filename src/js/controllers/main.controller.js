angular
  .module('vamApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$auth'];

function MainCtrl($auth) {
  const vm = this;
  // this vm.isAuthenticated method is available in any view
  vm.isAuthenticated = $auth.isAuthenticated;

  // at some point move this into a $transitions.onSuccess() //
  if($auth.isAuthenticated()) vm.currentUserId = $auth.getPayload().userId;
}
