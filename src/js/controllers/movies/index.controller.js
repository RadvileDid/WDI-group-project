angular
  .module('vamApp')
  .controller('MoviesIndexCtrl', MoviesIndexCtrl);

MoviesIndexCtrl.$inject = ['$http'];
function MoviesIndexCtrl($http) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  // const query = 'neverending%20story';

  const vm = this;

  // vm.findPopularMovies = findPopularMovies;
  vm.currentlyScreeningMovies = currentlyScreeningMovies;
  findPopularMovies();

  function findPopularMovies() {
    $http
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => {
        vm.all = res.data.results;
      });
  }

  function currentlyScreeningMovies() {
    $http
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`)
      .then(res => {
        vm.all = res.data.results;
      });
  }




  vm.findMovie = findMovie;
  // vm.badRequest = badRequest;

  function findMovie() {
    $http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${vm.search}&include_adult=false`)
      .then(res => {
        console.log(res.data);
        console.log(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${vm.search}&include_adult=false`);
        vm.all = res.data.results;
      });
  }

}

// i need to find out about the queries
// then push them through to the front end
