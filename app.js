const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./src/config/mongo');
const routes = require('./src/routes');



const app = express();

app.use(cors());
app.use(express.json());
routes(app);
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`==>> Server is running on http://localhost:${port}`);
});

dbConnect();


