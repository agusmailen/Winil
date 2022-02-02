//React
import React, { Fragment, useEffect } from 'react';
//Redux
import { connect } from 'react-redux';
//Styles
import '../assets/styles/components/Catalogo.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
//actions
import { createFilters, setQuery } from '../redux/actions/Filters.actions';

const Filters = (props) => {
	const { filter } = props;
	//aca tengo que armar el payload en funcion de lo que se selecciona.
	const handleFilter = (event) => {
		const data = [event.target.id, event.target.value];
		props.setQuery(data);
	};
	useEffect(() => {
		props.createFilters();
	}, []);
	return (
		<Fragment>
			<h1 className='filters-title'>FILTRAR POR...</h1>
			<div>
				{filter[0]?.map((item) => {
					return (
						<>
							<h4 key={item.label} className='filters-subtitle'>{item.label}</h4>
							{item.values.map((filter) => {
								return (
									<div className='item-container'>
										<FormControlLabel
											value={filter}
											control={<Checkbox id={item.database} />}
											label={filter}
											labelPlacement='end'
											sx={{ '& .MuiSvgIcon-root': { fontSize: 16, color: '#212121' } }}
											onChange={handleFilter}
										/>
									</div>
								);
							})}
						</>
					);
				})}
				<h4 className='filters-subtitle'>BPM</h4>
				<input type='text' className='input-filter-BPM' placeholder='0' />
				<span className='span-filters-BPM'>hasta</span>
				<input type='text' className='input-filter-BPM' placeholder='900' />
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	filter: state.filter.filters,
	error: state.filter.error,
	query: state.filter.query,
});

export default connect(mapStateToProps, {
	createFilters,
	setQuery,
})(Filters);