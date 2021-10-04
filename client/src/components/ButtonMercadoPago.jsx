import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const ButtonMercadoPago = (props) => {

	const { items } = props;

	const handleCheckout = async (item) => {
		const response = await axios.post('http://localhost:3001/checkout', item);
		window.location.href = response.data.payload.body.init_point;
	};

	return (
		<Button variant='contained' onClick={() => handleCheckout(items)}>IR A CHECKOUT</Button>
	);
};

export default ButtonMercadoPago;