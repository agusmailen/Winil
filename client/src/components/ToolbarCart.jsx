import React, { useEffect } from 'react';
//React-Redux
import { connect } from 'react-redux';
//Material-UI
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//actions
import { removeItem } from '../redux/actions/Cart.actions';

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === 'light'
		? {
			color: theme.palette.secondary.main,
			backgroundColor: lighten(theme.palette.secondary.light, 0.85),
		}
		: {
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.secondary.dark,
		},
	title: {
		flex: '1 1 100%',
		color: '#212121',
		letterSpacing: '4px',
	},
}));

const ToolbarCart = (props) => {
	const classes = useToolbarStyles();
	const { numSelected, selected, cartItems } = props;

	const handleRemoveItem = (selected) => {
		props.removeItem(selected);
	};
	useEffect(() => {
	}, [cartItems]);
	return (
		<Toolbar className={clsx(classes.root, {
			[classes.highlight]: numSelected > 0,
		})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
					{numSelected}
					Seleccionado
				</Typography>
			) : (
				<Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
					CARRITO
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title='Delete' onClick={() => handleRemoveItem(selected)}>
					<IconButton aria-label='delete'>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				null
			)}
		</Toolbar>
	);
};
const mapStateToProps = (state) => ({
	cartItems: state.cart.cart_items,
});
const mapDispatchToProps = {
	removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarCart);