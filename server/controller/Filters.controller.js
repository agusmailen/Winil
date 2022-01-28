//const {stringify} = require('flatted');
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
}

module.exports = FilterController;




// 	getDropdown(payload, componentProps) {
// 		return {
// 			type: "dropdown",
// 			data: {
// 				label: comopnentProps.label,
// 				values: payload
// 			}
// 		}
// 	}

// 	getFilters() {
// 		const generos = getDropdown(getSongsByGenre(), { label: "Generos" })
// 		const duracion = getDropdown(getSongsByDuracion(), { label: "duracion" })

// 		return res.json({
// 			components: [generos, duracion]
// 		})
// 	}
// }