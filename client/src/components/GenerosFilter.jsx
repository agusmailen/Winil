import React from 'react';
import Button from '@material-ui/core/Button';

const Generos = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.currentTarget.value);
	};
	return (
		<div className='filter_sections'>
			<h5>Géneros</h5>
			<Button type='submit' value='Electronic' onClick={handleSubmit}>Electronic</Button>
			<Button type='submit' value='Hip-Hop' onClick={handleSubmit}>Hip-Hop</Button>
			<Button type='submit' value='Rap' onClick={handleSubmit}>Rap</Button>
			<Button type='submit' value='R&B' onClick={handleSubmit}>R&B</Button>
			<Button type='submit' value='Trap' onClick={handleSubmit}>Trap</Button>
		</div>
	);
};

export default Generos;