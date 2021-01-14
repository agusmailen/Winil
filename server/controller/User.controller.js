const UserService = require('../services/user.services');
const User = new UserService();

class UserController {
	
	get(req, res) {
		const userId = req.params.id;
		User.get(userId)
		.then( user => {
			return res.json({
				status:200,
				payload: user
			})
		})
		.catch(err => console.error('err:', err));
	}

	getAll(req, res) {
		User.getAll({})
		.then( allUsers => {
			return res.json({
				status: 200,
				payload: allUsers
			})
		})
		.catch(err => console.error('err:', err));
	}

	create(req, res) {
		const payload = req.body;
		User.create(payload)
		.then( user => {
			return res.json({
				status: 200,
				payload: user
			})
		})
		.catch(err => console.error('err:', err));
	}

	login(req, res) {
		const payload = req.body;
		User.login(payload)
		.then ( user => {
			return res.json({
				status:200,
				payload: user
			})
		})
	}

	delete(req, res) {
		const id = req.params.id;
		User.delete(id)
		.then( userDeleted => {
			return res.json({
				status:200,
				payload: userDeleted
			})
		})
		.catch(err => console.error('err:', err));
	}

	update(req, res) {
		const id = req.params.id;
		const payload = req.body;

		User.update(id, payload)
		.then(userMod => {
			return res.json({
				status: 200,
				payload: userMod
			});
		})
		.catch(err => console.error('err:', err));
	}
}

module.exports = UserController;