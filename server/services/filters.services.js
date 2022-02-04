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

	filterTracksBpm(array) {
		return TrackModel.find({ $and: [{ "bpm": {$gte: parseInt(array[0], 16)}}, {"bpm": {$lte: parseInt(array[1], 16)}} ]})
	}
}

module.exports = FilterService;