angular
  .module('vamApp')
  .controller('MovieCtrl', MovieCtrl);

MovieCtrl.$inject = ['$http', '$state', 'MovieGroup'];
function MovieCtrl($http, $state, MovieGroup) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  const vm = this;

  vm.addComment = addComment;
  vm.add        = addOrCreateGroup;

  MovieGroup
    .query({ id: $state.params.id })
    .$promise
    .then(data => {
      vm.movieGroup = data;

      if (vm.movieGroup.length !== 0) {
        vm.isGroup = true;
      } else {
        vm.isGroup = false;
      }
    });

  // vm.movieGroup = MovieGroup.query({ id: $state.params.id });

  $http
    .get(`https://api.themoviedb.org/3/movie/${$state.params.id}?api_key=${apiKey}`, { skipAuthorization: true })
    .then(res => {
      console.log(res);
      vm.movie = res.data;
    });


  function addComment() {
    MovieGroup
      .addComment({ id: vm.movie.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.movie.comments.push(comment);
        vm.newComment = {};
      });
  }

  function addOrCreateGroup() {
    MovieGroup
      .addUser({ id: $state.params.id }) // movie id from the themoviedb API
      .$promise
      .then((response) => {
        vm.group = response;
        // console.log(vm.group);
        vm.isGroup = true;
      });
  }




  //
  // function deleteComment(comment) {
  //   MovieComment
  //     .delete({ movieId: vm.movie.id, id: comment.id })
  //     .$promise
  //     .then(() => {
  //       const index = vm.movie.comments.indexOf(comment);
  //       vm.movie.comments.splice(index, 1);
  //     });
  // }
  //
  // vm.deleteComment = deleteComment;

  //Otis
  // function deleteMovie() {
  //   vm.movie
  //     .$remove()
  //     .then(() =>
  //       $state.go('moviesIndex'));
  // }
  //
  // vm.delete = deleteMovie;
  //
  // function addMovie() {
  //   Movie
  //     .joinMovie({ id: vm.user.id }) //??????????
  //     .$promise
  //     .then((response) => vm.movie.add = response.add);
  // }
  //
  // vm.add = addMovie;

}





























//hannahs $http

// angular
//   .module('vamApp')
//   .controller('MoviesShowCtrl', MoviesShowCtrl),
//
// MoviesShowCtrl.$inject = ['$state', '$http'];
// function MoviesShowCtrl($state, $http) {
//   const vm = this;
//
//   $http
//     .get(`/api/movies/${$state.params.id}`)
//     .then((response) => {
//       vm.movie = response.data;
//     });
//
//   vm.delete = deleteMovie;
//
//   function deleteMovie() {
//
//     $http
//       .delete(`/api/movies/${$state.params.id}`)
//       .then(() => {
//         $state.go('moviesIndex');
//       });
//   }
//
// }
