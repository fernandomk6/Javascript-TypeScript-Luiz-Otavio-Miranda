const express = require('express');
const route = express.Router();

const homeControler = require('./src/controllers/homeController');

route.get('/', homeControler.initialPage);
route.post('/', homeControler.initialPagePost);

module.exports.route = route;