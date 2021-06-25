import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../assets/styles/components/Bar.scss';

const Bar = () => {

	const [min, setMin] = useState('');
	const [max, setMax] = useState('');

	const handleMin = (event) => {
		setMin(event.target.value);
		console.log(min);
	};
	const handleMax = (event) => {
		setMax(event.target.value);
		console.log(max);
	};

	const handleSubmit = (event) => {
		console.log(form);
	};

	return (
		<div className='bpm_container'>
			<h1 className='bpm_title'>BPM</h1>
			<div className='input_container'>
				<form action='submit' type='submit' id='form-bpm' onSubmit={handleSubmit}>
					<input type='text' onChange={handleMin} />
					<span>to</span>
					<input type='text' onChange={handleMax} />
					{/* poner un boton y obtengo los valores. Lo manejo como un formulario*/}
					<IconButton color='secondary' aria-label='add an alarm' id='button-bpm-filter'>
						<ArrowForwardIosIcon />
					</IconButton>
				</form>
			</div>
		</div>
	);
};

export default Bar;