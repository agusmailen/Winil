//const {stringify} = require('flatted');
const FilterService = require('../services/filters.services');
const Filter = new FilterService();

class FilterController {

	getDropdown(payload, componentProps) {
		return {
			type: 'checbox',
			data: {
				label: componentProps.label,
				values: payload
			}
		}
	}

	async getFilters(req, res) {
		const filtersByGenre = await Filter.getTracksByGenre().then(res => {return res})
		const generos = this.getDropdown(filtersByGenre, { label: 'generos' })
		
		return res.json({
			components: [generos]
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