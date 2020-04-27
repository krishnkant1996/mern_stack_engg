let Router = require('express').Router();
let controller = require('./product.controller');
let { responses, gaurd } = require('../../utils');
let validation = require('./product.validations')


Router.get('/product-list',gaurd.verifyToken, controller.productList);
Router.post('/add-product',gaurd.verifyToken,validation.updateProduct, controller.addProduct);
Router.put('/update-product/:id',gaurd.verifyToken,validation.updateProduct, controller.updateProduct);
Router.delete('/delete-product/:id',gaurd.verifyToken, controller.deleteProduct);

module.exports = Router;