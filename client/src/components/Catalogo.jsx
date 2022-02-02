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
import { listRequest, listFilters } from '../redux/actions/Track.actions';
import isEmpty from '../utils/isEmpty';

const Catalogue = (props) => {
	const { payload, query } = props;
	useEffect(() => {
		props.listRequest();
		isEmpty(query) ? props.listRequest() : props.listFilters(query);
	}, [query]);

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
					{payload?.map((item) => {
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
		query: state.filter.query,
	};
};
export default connect(mapStateToProps, {
	listRequest,
	listFilters,
})(Catalogue);