const mongoose = require('mongoose');
const { db, env } = require('../config/environment'); //dev db needs to be the db "development" from the environment.js file. I am not sure how to direct it there but I will work on that now.

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const Group = require('../models/movieGroup');
const User  = require('../models/user');

Group.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Otis',
    email: 'otis@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'http://www.benfarrell.com/wp-content/uploads/2013/03/otto.png',
    quote: 'I stand on my record. Fifteen crashes and not a single fatality.',
    genre: 'Comedy'
  }, {
    username: 'Rad',
    email: 'rad@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest?cb=20130405164548',
    quote: 'Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?' ,
    genre: 'Fantasy'
  }, {
    username: 'hannah',
    email: 'hannah@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/simpsons/images/1/12/Lisa_Simpson-0.png/revision/latest?cb=20161027220133',
    quote: 'Bond. James Bond.',
    genre: 'Action'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
