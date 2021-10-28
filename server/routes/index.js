const routes = require('express').Router();
const privateRoute = require('../middlewares/private.route').route;
const jwt = require('../utils/jwt');
const handleCheckout = require('../middlewares/mercadopago');
//MercadoPago
routes.post('/checkout', (req, res, next) => handleCheckout(req, res, next));
//Filters
const FilterController = require('../controller/Filters.controller');
const Filter = new FilterController();
routes.get('/filters', (Filter.getFilters.bind(Filter)));
//User
const UserController = require('../controller/User.controller');
const User = new UserController();
routes.post('/user', (req, res, next) => privateRoute(req, res, next),  User.create.bind(User));
routes.post('/user/login', (req, res, next) => privateRoute(req, res, next), User.login.bind(User));
routes.put('/user/:id', (req, res, next) => privateRoute(req, res, next), User.update.bind(User));
routes.delete('/user/:id', (req, res, next) => privateRoute(req, res, next), User.delete.bind(User));
//verify token 
routes.post('/user/verifyToken', (req, res, next) => privateRoute(req, res, next), User.authUser.bind(User));
//Tracks
const TrackController = require('../controller/Track.controller');
const Track = new TrackController();
routes.post('/track', (Track.create.bind(Track)));
routes.post('/list', (Track.getAll.bind(Track)));
routes.get('/:id', (Track.get.bind(Track)));

module.exports = routes;

