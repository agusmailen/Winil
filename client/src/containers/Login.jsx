import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginRequest } from '../redux/actions/User.actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

	const [form, setValues] = useState({});
	const { loginRequest } = props;
	const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
	};

	useEffect(() => {
		console.log('props', props);
	}, [props]);

	const handleSubmit = (event) => {
		console.log('email', event.target.standard_basic_email.value.length);
		console.log('pass', event.target.standard_basic_password.value);
		if (!event.target.standard_basic_email.value.length) {
			alert('ESTE CAMPO ESTA VACIO NO PODES CONTINUAR');
			console.log('entro');
		}

		loginRequest(form);
		event.preventDefault();
	};

	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inícia Sesión</h2>
				<form action='' className='login__container--form' onSubmit={handleSubmit}>
					<TextField id='standard_basic_email' label='Email' name='email' onChange={handleInput} />
					<TextField id='standard_basic_password' label='Constraseña' name='password' type='password' onChange={handleInput} />
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

const mapStateToProps = (state) => ({
    userData: state.user.user,
});

export default connect(mapStateToProps, {
	loginRequest,
})(Login);