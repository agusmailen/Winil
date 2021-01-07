import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register = (props) => {
	return (
		<section className='register'>
			<section className='register__container'>
				<h2>Registro</h2>
				<form action='' className='register__container--form'>
					<TextField id='standard-basic-name' label='Nombre' />
					<TextField id='standard-basic-email' label='Email' />
					<TextField id='standard-basic-password' label='Constraseña' />
					<Button variant='outlined'>Iniciar Sesión</Button>
				</form>
			</section>
		</section>
	);
};

export default Register;