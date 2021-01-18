const initialState = { user: null, error: false };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTER_REQUEST':
			return {
				...state,
				user: action.payload,
			};
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
			return {
				...state,
				error: true,
			};
		default:
			return state;
	};
};

export default reducer;