angular
  .module('vamApp')
  .controller('MovieCtrl', MovieCtrl);

MovieCtrl.$inject = ['$http', '$state', 'MovieGroup', '$auth'];
function MovieCtrl($http, $state, MovieGroup, $auth) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  const vm = this;
  const currentUserId = $auth.getPayload().userId;

  vm.addComment = addComment;
  vm.add        = addOrCreateGroup;
  vm.remove = leaveMovieGroup;
  vm.isInGroup = isInGroup;

  MovieGroup
    .get({ id: $state.params.id })
    .$promise
    .then(data => {
      console.log('the group', data);
      vm.movieGroup = data;
    })
    .catch(() => {
      // if no group exists on page load
      vm.movieGroup = {
        users: [],
        comments: []
      };
    });

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
        console.log(comment);
        vm.movieGroup.comments.push(comment);
        vm.newComment = {};
      });
  }

  function addOrCreateGroup() {

    MovieGroup
      .addUser({ id: $state.params.id }) // movie id from the themoviedb API
      .$promise
      .then((response) => {
        vm.movieGroup.users = response.users;
        // vm.isInGroup();
      });
  }

  function leaveMovieGroup() {
    MovieGroup
      .leaveMovieGroup({ id: $state.params.id })
      .$promise
      .then((response) => {
        vm.movieGroup.users = response.users;
      });
  }

  function isInGroup() {
    return vm.movieGroup && $auth.isAuthenticated() && (vm.movieGroup.users.some(user => user.id === currentUserId));
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
