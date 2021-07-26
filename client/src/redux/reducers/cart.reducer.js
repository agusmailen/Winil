const initialState = { cart_items: [], cart_id: [] };

const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'CART_ADD_ITEM':
			const cartItems = [...state.cart_items];
			const cartItemsId = [...state.cart_id];
			cartItems.push(payload);
			cartItemsId.push(payload._id);
			return { ...state, cart_items: cartItems, cart_id: cartItemsId };
		case 'CART_REMOVE_ITEM':
			return { ...state, cart_items: items, cart_id: id };
		default:
			return { ...state };
	}
};

export default cartReducer;