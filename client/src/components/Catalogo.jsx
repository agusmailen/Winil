import React, { Fragment } from 'react';
import background from '../assets/static/fondo_hd_169_mesa_mezclas_bn.jpg';
import '../assets/styles/components/Catalogo.scss';
import Bar from './bar';
import Key from './KeyFilter';
import Generos from './GenerosFilter';

const Catalogue = ({ children }) => {
	return (
		<Fragment>
		<div className='background_container'>
			<img src={background} alt='' />
		</div>
		<div className='catalogue_container'>
			<div className='filter_container'>
				<Generos></Generos>
				<h5>Filtrar por:</h5>
				<Key></Key>
				<Bar></Bar>
			</div>
			<div className='container_items'>
				{children}
			</div>
		</div>
		</Fragment>
	);
};

export default Catalogue;