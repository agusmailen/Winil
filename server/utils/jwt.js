const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
	token: (data) => jwt.sign({data}, config.config.key, config.algorithm),
	decoded: (token) => jwt.verify(token, config.config.key, config.algorithm, (err, decoded) => {
		if(err) return false;
		return decoded;
	})
};