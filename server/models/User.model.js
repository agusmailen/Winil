const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	// active: {
	// 	type: Boolean,
	// 	required: true
	// }
});

const User = mongoose.model('user', userSchema);
module.exports = User;