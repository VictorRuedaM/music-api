const multer = require('multer');

const storage = multer.diskStorage({

  destination: function(req, file, cb){
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function(req, file, cb){

    const extension = file.originalname.split('.').pop();
    const fileName = `file__${Date.now()}.${extension}`;
    cb(null, fileName);
  }
});

const uploadMiddleware = multer({
  storage: storage
});


module.exports = uploadMiddleware;