const initialState = { filters: [], error: null };

const filtersReducer = (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case 'SET_FILTERS':
			const filtersDescription = [...state.filters];
			filtersDescription.push(payload);
			return { ...state, filters: filtersDescription };
		case 'SET_FAILED':
			return { ...state, error };
		default:
			return { ...state };
	}
};

export default filtersReducer;