const jwt = require('jsonwebtoken');
const config = require('../config/config').config;

module.exports = {
	token: (data) => jwt.sign({data}, config.key, { expiresIn: '2h' }),
	decoded: (token) => jwt.verify(token, config.key, (err, decoded) => {
		if(err) return console.log('error', err);
		return decoded;
	})
};