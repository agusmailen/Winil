import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import isAuth from '../utils/isAuth';

const ButtonMercadoPago = ({ items, history }) => {

	const handleCheckout = async (item) => {
		const response = await axios.post('http://localhost:3001/checkout', item);
		isAuth() ?
			window.location.href = response.data.payload.body.init_point
		:
			history.push({
				pathname: '/Login',
				customNameData: items,
			});
	};

	return (
		<Button variant='contained' onClick={() => handleCheckout(items)}>IR A CHECKOUT</Button>
	);
};

export default withRouter(ButtonMercadoPago);