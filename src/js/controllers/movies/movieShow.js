angular
  .module('vamApp')
  .controller('MovieCtrl', MovieCtrl);

MovieCtrl.$inject = ['$http', '$state'];

function MovieCtrl($http, $state) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  const vm = this;

  $http
    .get(`https://api.themoviedb.org/3/movie/${$state.params.id}?api_key=${apiKey}`)
    .then(res => {
      vm.all = res;
    });
}
