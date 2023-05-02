const mongoose = require('mongoose');
require('dotenv').config();



const dbConnect = async () => {

  try {
    const DB_URI = process.env.DB_URI;
     await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    })
  console.log('==> ** Successful connection to DB **');
  } catch (error) {
    console.log(`==> ** Error connecting to DB -- [${error}] **`);
  }
  
}

module.exports = dbConnect;