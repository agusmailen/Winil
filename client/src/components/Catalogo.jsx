//React
import React, { Fragment, useEffect } from 'react';
//Redux
import { connect } from 'react-redux';
//Style
import '../assets/styles/components/Catalogo.scss';
import background from '../assets/static/fondo_hd_169_mesa_mezclas_bn.jpg';
//Components
import CatalogueItem from './CatalogoItem';
import Filters from './Filters';
//Actions
import { listRequest } from '../redux/actions/Track.actions';

const Catalogue = (props) => {
	const { payload } = props;
	useEffect(() => {
		props.listRequest();
	}, []);

	return (
		<Fragment>
			<div className='background_container'>
				<img src={background} alt='' />
			</div>
			<div className='catalogue_container' id='catalogo-id'>
				<div className='filter_container'>
					<Filters />
				</div>
				<div className='container_items'>
					{payload.map((item) => {
						return (
							<CatalogueItem key={item._id} {...item} />
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		payload: state.track.tracks,
		error: state.track.error,
	};
};
export default connect(mapStateToProps, {
	listRequest,
})(Catalogue);