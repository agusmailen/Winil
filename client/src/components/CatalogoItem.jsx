//React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//Style
import '../assets/styles/components/CatalogoItem.scss';

const CatalogueItem = (props) => {
	const { background, _id, title } = props;
	return (
	<div className='catalogo_item'>
		<Link to={`/track/${_id}`}>
			<img src={background} alt='' />
			<div className='item_description'>
				<h3>{title}</h3>
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