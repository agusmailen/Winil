const initialState = { filters: [], error: null, query: [{ filter: 'musicalGenre', value: [] }, { filter: 'musicalMood', value: [] }, { filter: 'key', value: [] }] };

const filtersReducer = (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case 'SET_FILTERS':
			const filtersDescription = [...state.filters];
			filtersDescription.push(payload);
			return { ...state, filters: filtersDescription };
		case 'CHANGE_QUERY':
			const query = [...state.query];
			const objectQuery = query.find((item) => { return item.filter === payload[0]; });
			objectQuery.value.includes(payload[1]) ? objectQuery.value.splice(objectQuery.value.indexOf(payload[1]), 1) : objectQuery.value.push(payload[1]);
			return { ...state, query };
		case 'SET_FAILED':
			return { ...state, error };
		default:
			return { ...state };
	}
};

export default filtersReducer;