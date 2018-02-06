angular
  .module('vamApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['Group', '$state'];
function GroupsShowCtrl(Group, $state) {
  const vm = this;
  vm.group = Group.get($state.params.id);
  vm.add = addGroup;
  vm.delete = deleteGroup;


  function deleteGroup() {
    vm.group
      .$remove()
      .then(() =>
        $state.go('groupsIndex'));
  }

  function addGroup() { //movies show controller
    Group
      .joinGroup({ id: vm.group.id })
      .$promise
      .then((response) => vm.group.add = response.add);
  }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //hannahs $http
//
// // angular
// //   .module('vamApp')
// //   .controller('GroupsShowCtrl', GroupsShowCtrl),
// //
// // GroupsShowCtrl.$inject = ['$state', '$http'];
// // function GroupsShowCtrl($state, $http) {
// //   const vm = this;
// //
// //   $http
// //     .get(`/api/groups/${$state.params.id}`)
// //     .then((response) => {
// //       vm.group = response.data;
// //     });
// //
// //   vm.delete = deleteGroup;
// //
// //   function deleteGroup() {
// //
// //     $http
// //       .delete(`/api/groups/${$state.params.id}`)
// //       .then(() => {
// //         $state.go('groupsIndex');
// //       });
// //   }
// //
// // }
