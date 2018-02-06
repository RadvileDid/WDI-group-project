angular
  .module('vamApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl),

GroupsShowCtrl.$inject = ['$state', '$http'];
function GroupsShowCtrl($state, $http) {
  const vm = this;

  $http
    .get(`/api/groups/${$state.params.id}`)
    .then((response) => {
      vm.group = response.data;
    });

  vm.delete = deleteGroup;

  function deleteGroup() {

    $http
      .delete(`/api/groups/${$state.params.id}`)
      .then(() => {
        $state.go('groupsIndex');
      });
  }

}
