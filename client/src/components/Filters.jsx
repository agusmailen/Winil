//React
import React, { Fragment, useEffect } from 'react';
//Redux
import { connect } from 'react-redux';
//actions
import { createFilters } from '../redux/actions/Filters.actions';
//Styles
import '../assets/styles/components/Catalogo.scss';

const Filters = (props) => {

	useEffect(() => {
		props.createFilters();
	}, []);

	return (
		<Fragment>
			<h1 className='filters-title'>FILTRAR POR...</h1>
			<div>
				{props.filter[0]?.map((item) => {
					return (
						<>
							<p key={item.label}>{item.label}</p>
							{item.values.map((item) => {
								return (
									<p key={item}>{item}</p>
								);
							})}
						</>
					);
				})}
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	filter: state.filter.filters,
	error: state.filter.error,
});

export default connect(mapStateToProps, {
	createFilters,
})(Filters);