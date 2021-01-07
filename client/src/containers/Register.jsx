import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
	return (
		<section className='register'>
			<section className='register__container'>
				<h2>Registro</h2>
				<form action='' className='register__container--form'>
					<TextField id='standard-basic-name' label='Nombre' />
					<TextField id='standard-basic-email' label='Apellido' />
					<TextField id='standard-basic-email' label='Teléfono' />
					<TextField id='standard-basic-email' label='Email' />
					<TextField id='standard-basic-email' label='Confirmar email' />
					<TextField id='standard-basic-password' label='Constraseña' />
					<Button variant='outlined'>Registrarme</Button>
				</form>
				<Link to='/Login'>Iniciar sesión</Link>
			</section>
		</section>
	);
};

export default Register;