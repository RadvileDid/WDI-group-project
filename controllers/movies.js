const Movie = require('../models/movie');

function moviesIndex(req, res, next) {
  Movie
    .find()
    .exec()
    .then(movies => {
      if (!movies) return res.notFound();
      return res.status(200).json(movies);
    })
    .catch(next);
}

function moviesShow(req, res, next) {
  Movie
    .find({ movieId: req.params.id}) //change
    .populate('comments.createdBy') ///?
    // .populate('users') => this needs to be added
    .exec()
    .then((movie) => {
      if(!movie) return res.notFound();
      // here we are adding 'movie' to the locals object after res.render
      return res.status(200).json(movie);
    })
    .catch(next);
}

function moviesAddUser(req, res, next) {
  // const userId = req.user.id;
  //
  // Movie
  //   .findById(req.params.id)
  //   .exec()
  //   .then((movie) => {
  //     if(!movie) return res.notFound();
  //
  //     movie.users.push(userId);
  //
  //     return movie.save();
  //   })
  //   .then((movie) => {
  //     return res.json(movie);
  //   })
  //   .catch(next);

  Movie
    .find({ movieId: req.params.id}) // req.params.id === movie id
    // .populate('users');
    .exec()
    .then(movie => {
      // a movie has been returned, add current users id to array of users for the movie
      // if no movie has been found, create a new movie passing in current users id into new movie

      if (movie.length !== 0) {
        console.log('found', movie[0]);
        movie[0].users.push(req.user.id); //?
        return movie[0].save();
      } else {
        console.log('not found', movie);
        return Movie
          .create({
            users: [req.user.id],
            movieId: req.params.id
          });
      }
    })
    .then(movie => res.status(200).json(movie))
    .catch(next);
}

function addCommentRoute(req, res, next) {

  req.body.createdBy = req.currentUser;

  Movie
    .findById(req.params.id)
    .exec()
    .then((movie) => {
      if(!movie) return res.notFound();

      const comment = movie.comments.create(req.body);
      movie.comments.push(comment);

      return movie.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

module.exports = {
  index: moviesIndex,
  show: moviesShow,
  add: moviesAddUser,
  addComment: addCommentRoute
};
