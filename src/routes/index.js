const tracks = require('./tracks');
const storage = require('./storages');
const auth = require('./auth');
const routes = (app) => {

  app.use('/api/tracks', tracks);
  app.use('/api/storage', storage);
  app.use('/api/auth', auth);

  
}




module.exports = routes
