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
		let { name, lastName, phone, email, password } = payload;
		const existUser = await UserModel.findOne({ email: payload.email }).exec();
		if (existUser) return false;
		payload = { name, lastName, phone, email, password };
		if (!payload.name || !payload.lastName || !payload.phone || !payload.email || !password) return false;
		payload.password = jwt.token(payload.password);
		const user = await new UserModel(payload);
		user.save();
		return (user);
	}
	
	async login(payload) {
		let { email, password } = payload;
		const user = await UserModel.findOne({ email: payload.email }).exec();
		if (!user) return false;
		payload = { email, password};
		const verifyPassword = jwt.decoded(user.password).data;
		if (payload.email !== user.email || payload.password !== verifyPassword) return false;
		return jwt.token(user);
	}

	delete(userId) {
		return UserModel.findOneAndDelete(userId)
	}

	update(id, payload) {
		return UserModel.findByIdAndUpdate(id, payload)
	}

	authUser(payload) {
		return (jwt.decoded(payload));
	}

}
module.exports = UserService;