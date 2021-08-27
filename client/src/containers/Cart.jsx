//React
import React from 'react';
import { connect } from 'react-redux';
//Components
import Header from '../components/Header';
import Table from '../components/TableCart';
import ButtonMercadoPago from '../components/ButtonMercadoPago';

const Cart = (props) => {
	const { cart } = props;
	const existItems = cart.length;
	return (
		<>
			<Header count={cart}></Header>
			{
				existItems ? (
					<div>
						<Table items={cart} />
						<ButtonMercadoPago items={cart} />
					</div>
				)
				:
					<h1>No hay productos en el carrito</h1>
			}
		</>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart.cart_items,
});

export default connect(mapStateToProps)(Cart);