const initialState = { user: {}, error: null };

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTER_REQUEST':
			return { ...state, user: action.payload, error: null };
		case 'LOGIN_REQUEST':
			return {
				...state,
				user: action.payload,
			};
        case 'LOGOUT_REQUEST':
            return {
				...state,
				user: action.payload,
			};
		case 'LOGIN_FAILED':
			return { ...state };
		case 'REGISTER_FAILED':
			return { ...state, error: action.error };
		default:
			return state;
	};
};

export default userReducer;