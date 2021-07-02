import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
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
	console.log(track);
	return (
		<Fragment>
			<Header />
				<div className='player_container'>
					<ReactPlayer className='react-player' url={track.source} />
					<div className='player_description'>
						<div>
							<h1>{track.title}</h1>
							<div>
								{track.description}
							</div>
						</div>
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
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	track: state.track.track_id,
});

export default connect(mapStateToProps, {
	listRequestId,
})(Player);