import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginRequest } from '../redux/actions/User.actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
	const {
		userData,
		error,
	} = props;

	useEffect(() => {
		if (userData && userData.payload) {
			localStorage.setItem('token', userData.payload);
			props.history.push('/user/profile');
		}
	}, [userData, error]);

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		props.loginRequest(data);
	};

	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inícia Sesión</h2>
				<form action='' className='login__container--form' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<TextField
							id='standard_basic_email'
							label='Email'
							name='email'
							inputRef={register({ required: true })}
						/>
						{errors.email && errors.email.type === 'required' && <p className='text-error'>Ingrese su email</p>}
					</div>
					<div>
						<TextField
							id='standard_basic_password'
							label='Constraseña'
							name='password'
							type='password'
							inputRef={register({ required: true })}
						/>
						{errors.password && errors.password.type === 'required' && <p className='text-error'>Ingrese su contraseña</p>}
					</div>
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
	error: state.user.error,
});

export default connect(mapStateToProps, {
	loginRequest,
})(Login);