const initialState = { tracks: [], error: null };

const tracksReducer = (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case 'LIST_REQUEST':
			return { ...state, tracks: payload.payload, error: null };
		case 'LIST_FAILED':
			return { ...state, tracks: [], error };
		default:
			return state;
	};
};

export default tracksReducer;