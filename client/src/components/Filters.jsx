//React
import React, { Fragment, useEffect } from 'react';
//Redux
import { connect } from 'react-redux';
//Styles
import '../assets/styles/components/Catalogo.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
//actions
import { createFilters } from '../redux/actions/Filters.actions';

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
							<h4 key={item.label} className='filters-subtitle'>{item.label}</h4>
							{item.values.map((item) => {
								return (
									<div className='item-container'>
										<FormControlLabel
											value='end'
											control={<Checkbox />}
											label={item}
											labelPlacement='end'
											sx={{ '& .MuiSvgIcon-root': { fontSize: 16, color: '#212121' } }}
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
});

export default connect(mapStateToProps, {
	createFilters,
})(Filters);