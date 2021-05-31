const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		required: true
	},
	musicalGenre: {
		type: Array,
		required: true
	},
	musicalMood: {
		type: Array,
		required: true
	}
});

const Track = mongoose.model('track', trackSchema);
module.exports = Track;