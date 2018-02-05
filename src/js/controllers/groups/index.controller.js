angular
  .module('vamApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http'];
function GroupsIndexCtrl($http) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  const query = 'neverending%20story';

  const vm = this;

  $http
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`)
    .then(res => {
      console.log(res.data.results);
      vm.all = res.data.results;
    });

}

// i need to find out about the queries
// then push them through to the front end
