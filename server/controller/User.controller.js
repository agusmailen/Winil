const UserService = require('../services/user.services');
const User = new UserService();

class UserController {
	
	get(req, res) {
		const userId = req.params.id;
		User.get(userId)
		.then( user => {
			if (!user) return res.json({ status: 404, message: 'Usuario no encontrado' });
			return res.json({
				status:200,
				payload: user
			})
		})
		.catch( err => { 
			return res.json ({ status:400, message: err })
		});
	}

	getAll(req, res) {
		User.getAll({})
		.then( allUsers => {
			if (!allUsers) return res.json({ status: 404, message: 'Usuarios no encontrados' });
			return res.json({
				status: 200,
				payload: allUsers
			})
		})
		.catch(err => {
			return res.json ({ status:400, message: err });
		});
	}

	create(req, res) {
		const payload = req.body;
		User.create(payload)
		.then( user => {
			if (!user) return res.json({ status: 400, message: 'El usuario ya existe' });
			return res.json({
				status: 200,
				payload: user
			})
		})
		.catch(err => {
			return res.json ({ status:400, message: err });
		});
	}

	login(req, res) {
		const payload = req.body;
		User.login(payload)
		.then ( user => {
			if (!user) return res.json({ status: 401, message: 'Credenciales incorrectas' });
			return res.json({
				status:200,
				payload: user
			})
		})
		.catch(err => {
			return res.json ({ status:400, message: err });
		});
	}

	delete(req, res) {
		const id = req.params.id;
		User.delete(id)
		.then( userDeleted => {
			if (!userDeleted) return res.json({ status: 404, message: 'Usuario no encontrado' });
			return res.json({
				status:200,
				payload: userDeleted
			})
		})
		.catch(err => {
			return res.json ({ status:400, message: err });
		});
	}

	update(req, res) {
		const id = req.params.id;
		const payload = req.body;
		User.update(id, payload)
		.then( userMod => {
			if (!userMod) return res.json({ status: 404, message: 'Usuario no encontrado' });
			return res.json({
				status: 200,
				payload: userMod
			});
		})
		.catch(err => {
			return res.json ({ status:400, message: err });
		});
	}
}

module.exports = UserController;