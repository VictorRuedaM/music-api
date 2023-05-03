const tracks = require('./tracks');
const storage = require('./storages');
const routes = (app) => {

  app.use('/api/tracks', tracks);
  app.use('/api/storage', storage);

  
}




module.exports = routes
