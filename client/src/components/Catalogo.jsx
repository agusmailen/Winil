import React, { Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import background from '../assets/static/fondo_hd_169_mesa_mezclas_bn.jpg';
import '../assets/styles/components/Catalogo.scss';

const Catalogue = ({ children }) => {
	return (
		<Fragment>
		<div className='background_container'>
			<img src={background} alt='' />
		</div>
		<h1>CATALOGO</h1>
		<div className='catalogue_container'>
			<div className='filter_container'>
				<div className='filter_sections'>
					<h5>Géneros</h5>
					<p>Trap</p>
					<p>Rap</p>
				</div>
				<h5>Filtrar por:</h5>
				<div className='filter_categories'>
					<p>Duración</p>
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
				</div>
				<div className='filter_categories'>
					<p>Duración</p>
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
				</div>
				<div className='filter_categories'>
					<p>Duración</p>
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
					<FormControlLabel control={<Checkbox name='checkedC' />} label='Uncontrolled' />
				</div>
			</div>
			<div className='container_items'>
				{children}
			</div>
		</div>
		</Fragment>
	);
};

export default Catalogue;