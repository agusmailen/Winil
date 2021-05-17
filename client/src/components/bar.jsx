import React, { useState } from 'react';
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
			<div className='input_container'></div>
				<form action='submit' type='submit' onSubmit={handleSubmit}>
					<input type='text' onChange={handleMin} />
					<span>to</span>
					<input type='text' onChange={handleMax} />
				</form>
		</div>
	);
};

export default Bar;