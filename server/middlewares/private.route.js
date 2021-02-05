const jwt = require('../utils/jwt');

module.exports = {
	route: (req, res, next) => {
		const token = req.headers['tokenkey'];
		const verify = jwt.decoded(token);
		if (verify) return next();
		return res.send({
			status:500,
			response: 'Ocurrió un error'
		});
	}
};