//React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//Style
import '../assets/styles/components/CatalogoItem.scss';

const CatalogueItem = (props) => {
	return (
	<div className='catalogo_item'>
		<Link to={`/track/${props._id}`}>
			<img src={props.background} alt='' />
			<div className='item_description'>
				<h3>{props.title}</h3>
				<span>Lorem ipsum dolor </span>
			</div>
		</Link>
	</div>
	);
};

const mapSateToProps = (state) => {
	return {
		payload: state.track.track_id,
		error: state.track.error,
	};
};

export default connect(mapSateToProps)(CatalogueItem);