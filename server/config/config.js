require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	host: process.env.HOST,
    port: process.env.PORT || 3001
}

module.exports = { config };