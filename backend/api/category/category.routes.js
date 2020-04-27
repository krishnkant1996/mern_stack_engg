let Router = require('express').Router();
let controller = require('./category.controller');
let { responses, gaurd } = require('../../utils');

Router.get('/categoryList',gaurd.verifyToken, controller.categoryList);
module.exports = Router;