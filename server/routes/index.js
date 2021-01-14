const routes = require('express').Router();

//User
const UserController = require('../controller/User.controller');
const User = new UserController();
routes.get('/user/:id', User.get.bind(User));
routes.get('/users', User.getAll.bind(User));
routes.put('/user/:id', User.update.bind(User));
routes.delete('/user/:id', User.delete.bind(User));
routes.post('/user', User.create.bind(User));
routes.post('/user/login', User.login.bind(User));


module.exports = routes;