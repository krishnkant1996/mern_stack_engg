let userRoutes = require('./user.routes')
let controller = require('./user.controller')
let validation = require('./user.validations')
let userService = require('./user.services')
module.exports = {
    userRoutes,
    controller,
    validation,
    userService
}