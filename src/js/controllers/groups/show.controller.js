angular
  .module('vamApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl),

GroupsShowCtrl.$inject = ['Group', '$state', '$auth'];
function GroupsShowCtrl(Group, $state, $auth) {
  const vm = this;
  vm.group = Group.get($state.params.id);


  function deleteGroup() {
    vm.group
      .$remove()
      .then(() =>
        $state.go('groupsIndex'));
  }

  vm.delete = deleteGroup;

  function addGroup() {
    Group
      .joinGroup({ id: vm.user.id }) //??????????
      .$promise
      .then((response) => vm.group.add = response.add);
  }

  vm.add = addGroup;

}





























//hannahs $http

// angular
//   .module('vamApp')
//   .controller('GroupsShowCtrl', GroupsShowCtrl),
//
// GroupsShowCtrl.$inject = ['$state', '$http'];
// function GroupsShowCtrl($state, $http) {
//   const vm = this;
//
//   $http
//     .get(`/api/groups/${$state.params.id}`)
//     .then((response) => {
//       vm.group = response.data;
//     });
//
//   vm.delete = deleteGroup;
//
//   function deleteGroup() {
//
//     $http
//       .delete(`/api/groups/${$state.params.id}`)
//       .then(() => {
//         $state.go('groupsIndex');
//       });
//   }
//
// }
