angular
  .module('vamApp')
  .controller('GroupIndexCtrl', GroupIndexCtrl);

GroupIndexCtrl.$inject = ['$http'];
function GroupIndexCtrl($http) {

  const vm = this;

  $http
    .get('')
    .then(res => {
      console.log(res);
      vm.all = res.data;
    });


}


// i need to find out about the queries
// then push them through to the front end
