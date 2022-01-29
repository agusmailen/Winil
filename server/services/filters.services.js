const TrackModel = require('../models/Track.model');

class FilterService {

	getTracksByGenre() {
		return TrackModel.distinct("musicalGenre");
	}

	getTracksByMood() {
		return TrackModel.distinct("musicalMood");
	}

	getTracksByKey() {
		return TrackModel.distinct("key");
	}

	filterTracks(value, array) {
		return TrackModel.find({ [value]: { $in: array }});
	}
}

module.exports = FilterService;