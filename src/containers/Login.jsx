import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inicia Sesión</h2>
				<form action='' className='login__container--form'>
					<TextField id='standard-basic-email' label='Email' />
					<TextField id='standard-basic-password' label='Constraseña' />
					<button className='button' type='submit'>Iniciar Sesión</button>
					<div className='login__container--recoverPass'>
						<a href='/'>Olvidé mi contraseña</a>
					</div>
				</form>
				<p className='login__container--register'>
					No tienes cuenta?
					<a href='/'>Regístrate</a>
				</p>
			</section>
		</section>
	);
};

export default (Login);