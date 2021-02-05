import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registerRequest } from '../redux/actions/User.actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
	const {
		payload,
		error,
	} = props;

	useEffect(() => {
		console.log('me actualice payload', payload);
		console.log('me actualice error', error);
		if (payload && payload.payload) {
			window.location.href = 'http://localhost:3000/Login';
		}

	}, [payload, error]);

	const { register, handleSubmit, errors, getValues } = useForm();

	const onSubmit = (data) => {
		props.registerRequest(data);
	};

	return (
		<section className='register'>
			<div className='register__container'>
				<form action='' className='register__container--form' onSubmit={handleSubmit(onSubmit)}>
					<h2>Registro</h2>
					<div>
						<TextField
							label='Nombre'
							id='standard-basic-name'
							name='name'
							inputRef={register({ required: true })}
						/>
						{errors.name && errors.name.type === 'required' && <p className='text-error'>Ingrese su email</p>}
					</div>
					<div>
						<TextField
							label='Apellido'
							id='standard-basic-lastName'
							name='lastName'
							inputRef={register({ required: true })}
						/>
						{errors.lastName && errors.lastName.type === 'required' && <p className='text-error'>Ingrese su apellido</p>}
					</div>
					<div>
						<TextField
							label='Teléfono'
							id='standard-basic-phone'
							name='phone'
							inputRef={register({
								required: true,
								pattern: /\d{10}/,
							})}
						/>
						{errors.phone && errors.phone.type === 'required' && <p className='text-error'>Ingrese su teléfono</p>}
						{errors.phone && errors.phone.type === 'pattern' && <p className='text-error'>Formato no válido</p>}
					</div>
					<div>
						<TextField
							label='Email'
							id='standard-basic-email'
							name='email'
							inputRef={register({
								required: true,
								pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
							})}
						/>
						{errors.email && errors.email.type === 'required' && <p className='text-error'>Ingrese su email</p>}
						{errors.email && errors.email.type === 'pattern' && <p className='text-error'>Formato no válido</p>}
					</div>
					<div>
						<TextField
							label='Confirmar email'
							id='standard-basic-confirmEmail'
							name='confirmEmail'
							inputRef={register({
								required: true,
								pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
								validate: (value) => value === getValues('email'),
							})}
						/>
						{errors.confirmEmail && errors.confirmEmail.type === 'required' && <p className='text-error'>Confirme su email</p>}
						{errors.confirmEmail && errors.confirmEmail.type === 'pattern' && <p className='text-error'>Formato no válido</p>}
						{errors.confirmEmail && errors.confirmEmail.type === 'validate' && <p className='text-error'>Los correos deben coincidir</p>}
					</div>
					<div>
						<TextField
							label='Constraseña'
							id='standard-basic-password'
							name='password'
							type='password'
							inputRef={register({ required: true })}
						/>
						{errors.password && errors.password.type === 'required' && <p className='text-error'>Ingrese una contraseña</p>}
					</div>
					<Button variant='outlined' type='submit' className='btn btn-primary'>Registrarme</Button>
				</form>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	payload: state.user.user,
	error: state.user.error,
});

export default connect(mapStateToProps, {
	registerRequest,
})(Register);