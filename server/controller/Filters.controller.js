const FilterService = require('../services/filters.services');
const Filter = new FilterService();

class FilterController {

	getCheckbox(payload, componentProps) {
		return {
			label: componentProps.label,
			values: payload
		}
	} 

	async getFilters(req, res) {
		const filtersByGenre = await Filter.getTracksByGenre().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener los generos' })})
		const generos = this.getCheckbox(filtersByGenre, { label: 'Genero' })
		
		const filtersByMood = await Filter.getTracksByMood().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener los moods' })})
		const moods = this.getCheckbox(filtersByMood, { label: 'Mood' })
		
		const filtersByKey = await Filter.getTracksByKey().then(res => {return res}).catch(err => {return res.json ({ status: 400, error: err, message: 'Ocurrió error al obtener las keys' })})
		const keys = this.getCheckbox(filtersByKey, { label: 'Key' })

		return res.json({
			components: [generos, moods, keys]
		})
	}

	async filterTracks(req, res) {
		//const filters = [{  clave: ['musicalGenre'], valor: ['Trap'] }, {  clave: ['musicalMood'], valor: ['Sad'] }];
		const filters = req.body.filters;
		let result = [];
		let ids = [];

		//filtrar por genero, mood, key
		for (const filter of filters ) {
			const tracks = await Filter.filterTracks(filter.clave, filter.valor).then(res => {return res}).catch(err => {return res.json ({ status:400, error: err, message: 'No se puedo obtener los filtros' })})
			for (const track of tracks) {
				if (!ids.includes(track.id)) {
					ids.push(track.id)
					result.push(track)
				}
			}

		}

		return res.json({
			tracks: result
		})
	}
}

module.exports = FilterController;