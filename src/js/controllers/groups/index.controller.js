angular
  .module('vamApp')
  .controller('GroupIndexCtrl', GroupIndexCtrl);

GroupIndexCtrl.$inject = ['$http'];
function GroupIndexCtrl($http) {

  const vm = this;

  $http
    .get('https://api.punkapi.com/v2/beers')
    .then(res => {
      console.log(res);
      vm.all = res.data;
    });


}
