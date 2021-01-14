const express = require('express');
const app = express();
const { config } = require('./config/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/Winil`;
mongoose.connect(url, { useNewUrlParser: true }, error => error ? console.error(`MongoDB Conneciton error: ${error}`) : null);
mongoose.connection.on('connected', () => console.info("[MongoDB] Connected to " + url));

app.use(bodyParser.urlencoded({ useNewUrlParser: true } ));
app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./routes'));

app.listen((config.port), () => {
	console.log(`Server running on ${config.host}:${config.port}`)
});