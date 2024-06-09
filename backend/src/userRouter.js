
const {Router} = require('express');
const UserController = require('./Controllers/User.controller');

const routes = Router();
const userController = new UserController();

routes.post('/create', userController.Registration);
routes.post('/login', userController.Login);
routes.get('/checkAuth', userController.checkStatusAuth);
module.exports= routes