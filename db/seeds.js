const mongoose = require('mongoose');
const { db } = require('../config/environment'); //dev db needs to be the db "development" from the environment.js file. I am not sure how to direct it there but I will work on that now.

mongoose.Promise = require('bluebird');
mongoose.connect(db);

const Group = require('../models/group');
const User = require('../models/user');

Group.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'otis',
    email: 'otis@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'rad',
    email: 'rad@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: 'hannah',
    email: 'hannah@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
