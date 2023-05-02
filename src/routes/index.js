const tracks = require('./tracks');
const routes = (app) => {

  app.use('/api/tracks', tracks);

  console.log('llegoooo')
}




module.exports = routes
