require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	host: process.env.HOST,
	port: process.env.PORT || 3001,
	key: process.env.KEY,
	token: process.env.PROD_ACCESS_TOKEN
}

module.exports = { config };