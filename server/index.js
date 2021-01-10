const express = require('express');
const app = express();
const { config } = require('./config/config');

app.listen((config.port), () => {
	console.log(`Server runing at ${config.host}:${config.port}`)
});