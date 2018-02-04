module.exports = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV,
  secret: process.env.SECRET || 'shh',
  db: 'mongodb://localhost/wdi-group-project-development'
};
