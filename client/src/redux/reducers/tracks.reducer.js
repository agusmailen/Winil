const initialState = { tracks: [], error: null, track_id: [] };

const tracksReducer = (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case 'LIST_REQUEST':
			return { ...state, tracks: payload.payload, error: null };
		case 'LIST_FAILED':
			return { ...state, tracks: [], error };
		case 'LIST_REQUEST_ID':
			return { ...state, track_id: payload.payload, error: null };
		default:
			return state;
	};
};

export default tracksReducer;