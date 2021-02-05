const initialState = { user: {}, error: null };

const userReducer = (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case 'REGISTER_REQUEST':
			return { ...state, user: payload, error: null };
		case 'LOGIN_REQUEST':
			return { ...state, user: payload, error: null };
        case 'LOGOUT_REQUEST':
            return { ...state, user: payload };
		case 'LOGIN_FAILED':
			return { ...state, user: {}, error };
		case 'REGISTER_FAILED':
			return { ...state, user: {}, error };
		default:
			return state;
	};
};

export default userReducer;