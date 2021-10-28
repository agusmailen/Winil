//const { db } = require('../models/Track.model');
const TrackModel = require('../models/Track.model');

class FilterService {

	getTracksByGenre() {
		return TrackModel.distinct("musicalGenre");
	}

	getTracksByMood() {
		return TrackModel.distinct("musicalMood");
	}
}

module.exports = FilterService;