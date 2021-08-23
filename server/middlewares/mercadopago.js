const mercadopago = require ('mercadopago');
const config = require('../config/config').config;


const checkout = (req, res, next) => {

	mercadopago.configure({
		access_token: config.token
	});

	const preference = req.body;
	console.log(req.body);

	mercadopago.preferences.create(preference)
	

	.then(response => {
		return res.json({
			status: 200,
			message: 'checkout exitoso',
			payload: response
		})
	})
	.catch(error => {
		return res.json({ status:400, error, message: 'todo mal' });
	});
};

module.exports = checkout;