const express = require('express');
const app = express();
const { config } = require('./config/config');
const cors = require('cors');

const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/Winil`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, error => error ? console.error(`MongoDB Connection error: ${error}`) : null);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('connected', () => console.info("[MongoDB] Connected to " + url));


app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors());
app.use('/', require('./routes'));

app.listen((config.port), () => {
	console.log(`Server running on ${config.host}:${config.port}`)
});