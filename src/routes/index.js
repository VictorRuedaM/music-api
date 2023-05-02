const tracks = require('./tracks');
const routes = (app) => {

  app.use('/api/tracks', tracks);

  
}




module.exports = routes
