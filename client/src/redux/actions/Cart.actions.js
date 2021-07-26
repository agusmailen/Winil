export const addItem = (item) => {
	return (dispatch) => {
		dispatch({ type: 'CART_ADD_ITEM', payload: item });
	};
};

export const removeItem = (payload) => {
	return (dispatch) => {
		dispatch({ type: 'CART_REMOVE_ITEM', payload });
	};
};