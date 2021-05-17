import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import '../assets/styles/components/Player.scss';
import ReactPlayer from 'react-player';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	}));

const Player = () => {

	const classes = useStyles();

	return (
		<Fragment>
			<Header />
				<div className='player_container'>
					<ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=Lc8D6cpMYZk' />
					<div className='player_description'>
						<h1>Description</h1>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}
							startIcon={<ShoppingCartOutlinedIcon />}
						>
						$23.23
						</Button>
					</div>
				</div>
		</Fragment>
	);
};

export default Player;