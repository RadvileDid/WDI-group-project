angular
  .module('vamApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http'];
function GroupsIndexCtrl($http) {

  const vm = this;

  $http
    .get('/api/index')
    .then(res => {
      console.log(res);
      vm.all = res.data;
    });

}

// i need to find out about the queries
// then push them through to the front end
