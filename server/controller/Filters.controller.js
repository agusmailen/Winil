const FilterService = require('../services/filters.services');
const Filter = new FilterService();

class FilterController {

	getCheckbox(payload, componentProps) {
		return {
			label: componentProps.label,
			database: componentProps.database,
			values: payload
		}
	} 

	async getFilters(req, res) {
		const filtersByGenre = await Filter.getTracksByGenre().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener los generos' })})
		const generos = this.getCheckbox(filtersByGenre, { label: 'Genero', database: 'musicalGenre' })
		
		const filtersByMood = await Filter.getTracksByMood().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener los moods' })})
		const moods = this.getCheckbox(filtersByMood, { label: 'Mood', database: 'musicalMood' })
		
		const filtersByKey = await Filter.getTracksByKey().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener las keys' })})
		const keys = this.getCheckbox(filtersByKey, { label: 'Key', database: 'key' })

		return res.json({
			components: [generos, moods, keys]
		})
	}

	async filterTracks(req, res) {
		const filters = req.body;
		console.log(req.body);
		//const filters = [{ filter: 'musicalGenre', value: [] }, { filter: 'musicalMood', value: ['Happy'] }, { filter: 'key', value: [] }, { filter: 'bpm', value: [100, 500] }]
		let result = [];
		let ids = [];

		//filtrar por genero, mood, key
		for (const filter of filters ) {
			if (filter.filter != 'bpm') {
				const tracks = await Filter.filterTracks(filter.filter, filter.value).then(res => {return res}).catch(err => {return res.json ({ status:400, error: err, message: 'No se puedo obtener los filtros' })})
				for (const track of tracks) {
					if (!ids.includes(track.id)) {
						ids.push(track.id)
						result.push(track)
					}
				}
			}

		}

		//filtrar por BPM
		const filterBpm = filters.find((item) => { return item.filter === 'bpm'; })
		console.log(filterBpm.value);
		const tracksByBpm = await Filter.filterTracksBpm(filterBpm.value).then(res =>  { console.log(res); return res}).catch(err => {return res.json ({ status:400, error: err, message: 'No se puedo obtener los filtros' })})
		for (const track of tracksByBpm) {
			if (!ids.includes(track.id)) {
				ids.push(track.id)
				result.push(track)
			}
		}
		console.log('este es el resultado', result);
		return res.json({
			tracks: result
		})
	}
}

module.exports = FilterController;