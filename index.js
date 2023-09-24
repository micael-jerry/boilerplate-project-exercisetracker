const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routerIndex = require('./src/routes/index.routes');
require('dotenv').config();

// MIDDLEWARES
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.use('/', routerIndex);





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
