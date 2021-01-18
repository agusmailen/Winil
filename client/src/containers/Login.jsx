import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginRequest } from '../redux/actions/User.actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

	const [form, setValues] = useState({});
	const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.loginRequest(form);
	};

	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inícia Sesión</h2>
				<form action='' className='login__container--form' onSubmit={handleSubmit}>
					<TextField id='standard-basic-email' label='Email' name='email' onChange={handleInput} />
					<TextField id='standard-basic-password' label='Constraseña' name='password' type='password' onChange={handleInput} />
					<Button variant='outlined' type='submit'>Iniciar Sesión</Button>
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

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);