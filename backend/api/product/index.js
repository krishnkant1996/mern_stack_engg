let productRoutes = require('./product.routes')
let controller = require('./product.controller')
let validation = require('./product.validations')
let productService = require('./product.services')
module.exports = {
    productRoutes,
    controller,
    validation,
    productService
}