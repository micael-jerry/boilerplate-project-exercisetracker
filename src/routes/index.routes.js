const express = require('express');
const { getIndex, ping } = require('../controllers/index.controller');
const routerIndex = express.Router();

routerIndex.get('/', getIndex);
routerIndex.get('/ping', ping);

module.exports = routerIndex;
