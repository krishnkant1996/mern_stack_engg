let Router = require('express').Router();
let { gaurd } = require('../../utils');
let controller = require('./user.controller');
let validation = require('./user.validations')

Router.post('/sign-up', validation.createUser, controller.signUp);
Router.post('/sign-in', validation.signIn, controller.signIn)
Router.get('/verify/:token', controller.verifyUser);
Router.post('/forgot-password', validation.forgotPassWord, controller.forgotPassWord);
Router.post('/reset-password/:code', validation.resetPassWord, controller.resetPassword);
Router.get('/user-details',gaurd.verifyToken, controller.userDetails);

module.exports = Router;