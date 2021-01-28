const jwt = require('../utils/jwt');

module.exports = {
	route: (req, res, next) => {
		const token = req.headers['tokenkey'];
		const verify = jwt.decoded(token);
		if (verify) {
			return next();
		} else {
			res.send({
				status:500,
				response: 'Ocurrió un error'
			});
			console.log('tokeeeen', req.headers['tokenkey']);
		}
	}
}