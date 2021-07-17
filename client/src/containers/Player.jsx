import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import '../assets/styles/components/Player.scss';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import { listRequestId } from '../redux/actions/Track.actions';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	}));

const Player = (props) => {
	const classes = useStyles();
	const { match: { params }, track } = props;
	useEffect(() => {
		props.listRequestId(params.playerId);
	}, []);
	console.log(track.musicalGenre);
	return (
		<Fragment>
			<Header />
				<div className='player_container'>
					<ReactPlayer className='react-player' url={track.source} />
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
												<p1>{item}</p1>
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
												<p1>{item}</p1>
											);
										})}
									</div>
								</div>
							</div>
						</div>
						<div className='button-shopping-contact'>
							<Button
								variant='contained'
								color='secondary'
								className={classes.button}
								startIcon={<ShoppingCartOutlinedIcon />}
							>
								$
								{ track.cost }
							</Button>
						</div>
					</div>
				</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	track: state.track.track_id,
});

export default connect(mapStateToProps, {
	listRequestId,
})(Player);