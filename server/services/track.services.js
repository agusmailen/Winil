const TrackModel = require('../models/Track.model');

class TrackService {

	async create(payload) {
		let { title, description, source, cost, musicalGenre, musicalMood } = payload;
		const existTrack = await TrackModel.findOne({ source: payload.source }).exec();
		if (existTrack) return false;
		payload = { title, description, source, cost, musicalGenre, musicalMood };
		if (!payload.title || !payload.description || !payload.source || !payload.cost || !payload.musicalGenre || !payload.musicalMood) return false;
		const track = await new TrackModel(payload);
		track.save();
		return track;
	}

	getAll({}) {
		return TrackModel.find({})
	}

	get(id) {
		return TrackModel.findOne({ _id: id })
	}
	
}

module.exports = TrackService;