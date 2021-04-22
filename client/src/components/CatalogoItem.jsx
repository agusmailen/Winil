import React from 'react';
import '../assets/styles/components/CatalogoItem.scss';
import background from '../assets/static/Acoustic_sound_wave_quantum_research.jpg';

const CatalogueItem = () => {
	return (
	<div className='catalogo_item'>
		<a href='/Player_id' target='_blank'>
			<img src={background} alt='' />
			<div className='item_description'>
				<h3>SOY UN TRACK</h3>
				<span>Lorem ipsum dolor </span>
			</div>
		</a>
	</div>
	);
};

export default CatalogueItem;