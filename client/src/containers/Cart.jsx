//React
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Meterial
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
//Components
import Header from '../components/Header';
import Table from '../components/TableCart';
//Style
import '../assets/styles/components/Cart.scss';
//assets
import image from '../assets/static/catgif.gif';

const Cart = (props) => {
	const { cart } = props;
	const existItems = cart.length;
	const history = useHistory();
	return (
		<>
			<Header count={cart}></Header>
			{
				existItems ? (
					<div>
						<Table items={cart} />
					</div>
				)
				:
				(
					<div className='empty-cart-container'>
						<img src={image} alt='' className='empty-cart-image' />
						<div className='empty-cart-description--container'>
							<IconButton aria-label='delete' size='large' id='button-empty-cart' onClick={() => history.goBack()}>
								<ArrowBackIosIcon size='large' id='iconArrow-empty-cart' />
							</IconButton>
							<h1 className='empty-cart-description'>No hay productos en el carrito</h1>
						</div>
					</div>
				)
			}
		</>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart.cart_items,
});

export default connect(mapStateToProps)(Cart);