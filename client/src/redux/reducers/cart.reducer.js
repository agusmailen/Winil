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
			const newCartItems = [...state.cart_items].filter((item) => !payload.includes(item._id));
			const newItemsId = [...state.cart_id].filter((item) => !payload.includes(item));
			return { ...state, cart_items: newCartItems, cart_id: newItemsId };
		default:
			return { ...state };
	}
};

export default cartReducer;