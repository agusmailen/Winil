const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { eventNames } = require('../models/User.model');

module.exports = {
	token: (data) => jwt.sign({data}, config.key, config.algorithm),
	decoded: (token) => jwt.verify(token, config.key, config.algorithm, (err, decoded) => {
		if(err) return false;
		return decoded;
	})
};