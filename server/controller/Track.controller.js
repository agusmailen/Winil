const TrackService = require('../services/track.services');
const Track = new TrackService();

class TrackController {

	create(req, res) {
		const payload = req.body;
		Track.create(payload)
		.then( track => {
			if(!(payload && payload.source)) return res.json({ status: 400, message: 'Todos los campos son obligatorios' });
			if (!track) return res.json({ status: 400, message: 'El link del track ya existe' });
			return res.json({
				status: 200,
				message: 'Track creado',
				payload: track
			})
		})
		.catch( err => {
			return res.json ({ status: 400, error: err, message: 'Ocurrió un error al subir el track' });
		});
	}

	getAll(req, res) {
		Track.getAll({})
		.then( allTracks => {
			if (!allTracks) return res.json({ status: 400, message: 'Tracks no encontrados' });
			return res.json ({
				status: 200,
				payload: allTracks
			})
		})
		.catch(err => {
			return res.json({ status: 400, message: err });
		});
	}

	get(req, res) {
		const trackId = req.params.id;
		Track.get(trackId)
		.then( track => {
			if (!track) return res.json({ status: 404, message: 'Track no encontrado' });
			return res.json({
				status:200,
				payload: track
			})
		})
		.catch( err => { 
			return res.json ({ status:400, message: err });
		});
	}

}

module.exports = TrackController;