import React from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inícia Sesión</h2>
				<form action='' className='login__container--form'>
					<TextField id='standard-basic-email' label='Email' />
					<TextField id='standard-basic-password' label='Constraseña' />
					<Button variant='outlined'>Iniciar Sesión</Button>
					<div className='login__container--recoverPass'>
						<Link to='/'>Olvidé mi contraseña</Link>
					</div>
				</form>
				<p className='login__container--register'>
					No tienes cuenta?
					<Link to='/Register'>  Regístrate</Link>
				</p>
			</section>
		</section>
	);
};

export default Login;