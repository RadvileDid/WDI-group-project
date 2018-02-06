angular
  .module('vamApp')
  .controller('MovieCtrl', MovieCtrl);

MovieCtrl.$inject = ['$http', '$state', 'MovieComment'];

function MovieCtrl($http, $state, MovieComment) {
  const apiKey = '1d4fa77475568ca9a63fb4a287dd496b';
  const vm = this;

  $http
    .get(`https://api.themoviedb.org/3/movie/${$state.params.id}?api_key=${apiKey}`, { skipAuthorization: true })
    .then(res => {
      console.log(res);
      vm.movie = res.data;
    });

  function addComment() {
    MovieComment
      .save({ id: vm.movie.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.movie.comments.push(comment);
        vm.newComment = {};
      });
  }

  vm.addComment = addComment;
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
