const UserModel = require('../models/User.model');
const jwt = require('../utils/jwt');

class UserService {

	get(id) {
		return UserModel.findOne({ _id: id })
	}

	getAll({}) {
		return UserModel.find({})
	}

	async create(payload) {
		let { name, lastName, phone, email, password, active } = payload;
		const existUser = await UserModel.findOne({ email: email.payload }).exec();
		if (existUser) return false;
		payload = { name, lastName, phone, email, password, active };
		payload.password = jwt.token(payload.password);
		const user = await new UserModel(payload);
		user.save()
		return user
	}
	
	async login(payload) {
		let { email, password } = payload;
		const user = await UserModel.findOne({ email: email.payload }).exec();
		if ( !user) return false;
		payload = { email, password};
		const verifyPassword = jwt.decoded(user.password);
		if (payload.email !== user.email || payload.password !== verifyPassword) return false
		user.password = jwt.token(user.password);
		return user
	}

	delete(userId) {
		return UserModel.findOneAndDelete(userId)
	}

	update(id, payload) {
		return UserModel.findByIdAndUpdate(id, payload)
	}

}
module.exports = UserService;