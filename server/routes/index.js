const routes = require('express').Router();
const privateRoute = require('../middlewares/private.route').route;
const jwt = require('../utils/jwt');

//User
const UserController = require('../controller/User.controller');
const User = new UserController();
routes.post('/user', (req, res, next) => privateRoute(req, res, next),  User.create.bind(User));
routes.post('/user/login', (req, res, next) => privateRoute(req, res, next), ( User.login.bind(User)));
routes.put('/user/:id', (req, res, next) => privateRoute(req, res, next), User.update.bind(User));
routes.delete('/user/:id', (req, res, next) => privateRoute(req, res, next), User.delete.bind(User));

module.exports = routes;