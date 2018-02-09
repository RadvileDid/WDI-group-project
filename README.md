
# Movie Hub - WDI group project

## Description

Movie Hub is an app which is designed as a social hub for movie fans. The aim of the app is to be able to chat with other users, find out about new movies, and join groups for your favourite movies.
It is an Angular front-end app which is currently hosted on heroku.
The app includes all major CRUD functions in a RESTful API. There are two models, using both referenced and embedded models. The app consumes its own API and we used third party dependencies UI-router and ngResource. We have also added authentication to the app and added restricted access to relevant areas. Authentication was tested using tools such as Mocha, Chai, Supertest and NYC. We have used a well known and stable third party API called The Movie Database (TMBd) as a source of our movies and movie info pages.

## User story

This app is a hub for all movie lovers who would like to see popular movies, search the database, and get in touch with fellow fans, exchanging their opinions with each other.

When the user lands on the homepage, the current popular movies as well as an option to search for a particular movie are being shown
The user can then register and login
When the wanted movie is found, user can click on it to see more information about the movie (such as release date, full title, genre, votes, comments and other)
In order to add a comment, user would need to register and login. Once that’s done, user would need to join the movie fan group that gives the access to leave the comments
Only the comment owner can delete the comment
User can also edit and delete the profile

### Draft wireframes:
<a href="https://imgur.com/80Xs15S"><img src="https://i.imgur.com/80Xs15S.jpg" title="source: imgur.com" /></a>

### Working on user story:
<a href="https://imgur.com/rSPZLPF"><img src="https://i.imgur.com/rSPZLPF.jpg" title="source: imgur.com" /></a>

### Group work
Workflow planning:
<a href="https://imgur.com/KQRYFbe"><img src="https://i.imgur.com/KQRYFbe.jpg" title="source: imgur.com" /></a>

### Trello board:
<a href="https://imgur.com/dyGSyzU"><img src="https://i.imgur.com/dyGSyzU.png" title="source: imgur.com" /></a>

### Technologies used:
* Angular
* Javascript ES6
* HTML5
* CSS
* SCSS/SASS
* Materialize CSS
* MongoDB
* Gulp
* Git
* Heroku
* Filestack API
* Movie DB API
* Dependencies used
* Angular-messages
* Bcrypt
* Bluebird
* Body-parser
* Express
* Jsonwebtoken
* Mongoose
* Morgan
* Angular-ui-router
* Angular-resource
* Satellizer
* Angular-filepicker
* Secondary tools
* Babel-cli
* Bower
* Chai
* Gulp
* Mocha
* NYC
* Supertest
* Trello
* Installing
* Run locally
* Download or clone the Github repo here
* View on Github
* View on Heroku
* View online

## Phase 2

For the next phase of this project there are a few improvements we would like to make.
The top priority is to make our navigation responsive, so it looks good on mobile devices. This involves using the materialize javascript functions which would need to be included in our code.
We would also like to improve and build upon the social focus of our app. The app is intended as a social hub for movie fans and people who might want to meet and connect over their favourite films, genres and franchises.
We would like to allow searching for movies and users by genre. This would help to connect people with similar interests. We would also consider incorporating a private messaging feature, for our users to get in touch with each other directly.
We also discussed adding a calendar feature, using a third party api, so that our users can plan events and join planned events, save them to the diary, and keep track of them.
The other thing we are planning is to make the user’s choices visible on their profile, adding a “watchlist” of movies a user is tracking, adding their events, and a list of the groups they are in.
The last thing we would improve on are minor css changes, in styling and layout, such as the position of the buttons on the movie show page, and the way users are displayed and added to the list of group members.
Refactor CSS and organise into partials.


https://tranquil-thicket-16146.herokuapp.com/
https://github.com/RadvileDid/WDI-group-project
