const mongoose = require('mongoose');
const { db, env } = require('../config/environment'); //dev db needs to be the db "development" from the environment.js file. I am not sure how to direct it there but I will work on that now.

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

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


Group
  .create([{
    movie: {
      title: 'Harry Potter and the Deathly Hallows',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Video62/v4/87/93/1f/87931fa5-88e8-e54d-0157-c1b79621f5c7/source/1200x630bb.jpg'
    }
  },{
    movie: {
      title: 'Neverending Story',
      image: 'http://is1.mzstatic.com/image/thumb/Video5/v4/38/5e/9c/385e9c38-f144-ee59-ed1d-67fa1d24eefe/source/1200x630bb.jpg'
    }
  },{
    movie: {
      title: 'Donnie Darko',
      image: 'https://s3-ap-southeast-2.amazonaws.com/fna-wordpress-website06/wp-content/uploads/2016/10/25214623/Donnie-Darko-Directors-Cut-960x1440-Portrate.jpg'
    }
  }])
  .then((groups) => {
    console.log(`${groups.length} groups created`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
