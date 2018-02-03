const mongoose = require('mongoose');
const devDB = require('../config/environment'); //dev db needs to be the db "development" from the environment.js file. I am not sure how to direct it there but I will work on that now.

mongoose.Promise = require('bluebird');
mongoose.connect(devDB);

const Group = require('../models/group');
const User = require('../models/user');

Group.collection.drop();
User.collection.drop();
