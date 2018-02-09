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
    username: 'Jack',
    email: 'jack@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/disney/images/9/90/Pirates4JackSparrowPosterCropped.jpg/revision/latest/scale-to-width-down/516?cb=20151120172626',
    quote: 'Did everyone see that? Because I will not be doing it again',
    genre: 'Comedy'
  }, {
    username: 'Davy',
    email: 'davy@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/piratesonline/images/a/a4/Jones.jpg/revision/latest?cb=20070710191644',
    quote: 'I do believe I could fight you with no weapons at all!',
    genre: 'Adventure'
  }, {
    username: 'Elizabeth',
    email: 'elizabeth@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/pirates/images/e/e9/Elizabeth-Swann-elizabeth-swann-8026946-1918-2560-1-.jpg/revision/latest?cb=20120329133455',
    quote: 'We are very much alike, you and I. I and you. Us.',
    genre: 'Adventure'
  }, {
    username: 'Tia',
    email: 'tia@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/pirates/images/7/7c/TiaDalma.jpg/revision/latest?cb=20101225232149',
    quote: 'Can\'t you ever just state something clear and concise like?',
    genre: 'Adventure'
  }, {
    username: 'Bill',
    email: 'bill@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/disney/images/8/8b/ImagesCAS74X1F.jpg/revision/latest/scale-to-width-down/516?cb=20151120180021',
    quote: 'I\'m already a part of the ship.',
    genre: 'Fantasy'
  }, {
    username: 'Hector',
    email: 'Hector@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/villains/images/4/4c/HectorbarbossaPotc.jpg/revision/latest?cb=20170508224908',
    quote: 'Give \'em a broadside! Pound \'em lads, pound \'em! Ha ha ha ha ha ha!',
    genre: 'Comedy'
  }, {
    username: 'Sao Feng',
    email: 'sao@ga.co',
    password: 'password',
    passwordConfirmation: 'password',
    profilePicture: 'https://vignette.wikia.nocookie.net/disney/images/9/9a/SaoFeng1-PotCAWE.jpg/revision/latest?cb=20140126074736',
    quote: 'Is his face familiar to you? Then I guess...he has no further need for it.',
    genre: 'Adventure'
  }, {
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
