angular
  .module('vamApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl),

GroupsShowCtrl.$inject = ['$state', '$http'];
function GroupsShowCtrl($state, $http) {
  const vm = this;
  vm.group = {};

  $http
    .get(`/api/groups/${$state.params.id}`)
    .then((response) => {
      console.log(response);
      // vm.group = response.data;
    });

  vm.delete = deleteGroup;

  function deleteGroup() {

    $http
      .delete(`/api/groups/${$state.params.id}`)
      .then(() => {
        $state.go('groupsIndex');
      });
  }

  console.log(vm.group);
}
