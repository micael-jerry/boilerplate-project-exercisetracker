const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routerIndex = require('./src/routes/index.routes');
const { connectDB } = require('./src/config/db');
require('dotenv').config();

// CONNECT APP TO DATABASE
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.use('/', routerIndex);





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
