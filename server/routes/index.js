const routes = require('express').Router();
const privateRoute = require('../middlewares/private.route').route;
const jwt = require('../utils/jwt');

//User
const UserController = require('../controller/User.controller');
const User = new UserController();
//routes.get('/user/:id', User.get.bind(User));
//routes.get('/users', User.getAll.bind(User));
routes.post('/user', (req, res, next) => privateRoute(req, res, next),  User.create.bind(User));
routes.post('/user/login', (req, res, next) => privateRoute(req, res, next), ( User.login.bind(User)));
routes.put('/user/:id', (req, res, next) => privateRoute(req, res, next), User.update.bind(User));
routes.delete('/user/:id', (req, res, next) => privateRoute(req, res, next), User.delete.bind(User));
//routes.post('/user', User.create.bind(User));


module.exports = routes;