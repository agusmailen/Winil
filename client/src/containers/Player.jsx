// React
import React, { Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
//React-Redux
import { connect } from 'react-redux';
//Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
//Styles
import '../assets/styles/components/Player.scss';
//Components
import Header from '../components/Header';
//Actions
import { listRequestId } from '../redux/actions/Track.actions';
import { addItem } from '../redux/actions/Cart.actions';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	}));

const Player = (props) => {
	const classes = useStyles();
	const { match: { params }, track, cart, cartId } = props;
	const includesId = cartId.includes(track._id);
	useEffect(() => {
		props.listRequestId(params.playerId);
	}, []);
	const handleAddItem = (track) => {
		props.addItem(track);
	};
	return (
		<Fragment>
			<Header count={cart} />
				<div className='player_container'>
					<ReactPlayer
						className='react-player'
						url={track.source}
						visibility='hidden'
						config={{
							youtube: {
								playerVars: { 'origin': 'http://localhost:3000/track/:id' },
							},
						}}
					/>
					<div className='player_description'>
						<div className='player-title'>
							<h1>{track.title}</h1>
							<div>
								{track.description}
							</div>
							<div className='player_items'>
								<div>
									<BarChartRoundedIcon />
									<div>
										{track.musicalGenre?.map((item) => {
											return (
												<span key={item}>{item}</span>
											);
										})}
									</div>
								</div>
								<div>
									<AudiotrackRoundedIcon />
									<div>
										{track.key}
									</div>
								</div>
								<div>
									<FavoriteRoundedIcon />
									<div>
										{track.musicalMood?.map((item) => {
											return (
												<span key={item}>{item}</span>
											);
										})}
									</div>
								</div>
							</div>
						</div>
						<div className='button-shopping-contact'>
						<p>Accedé al beat completo</p>
							{
								includesId ?
									(
									<Button variant='contained' disabled>In cart </Button>
									)
									:
									(
									<Button
										onClick={() => handleAddItem(track)}
										variant='contained'
										color='secondary'
										className={classes.button}
										startIcon={<ShoppingCartOutlinedIcon />}
									>
										$
										{ track.cost }
									</Button>
									)
							}
						</div>
					</div>
				</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	track: state.track.track_id,
	cart: state.cart.cart_items,
	cartId: state.cart.cart_id,
});

export default connect(mapStateToProps, {
	listRequestId,
	addItem,
})(Player);