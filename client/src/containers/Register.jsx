import React, { useState, useEffect } from 'react';
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

	const [inputError, setInputError] = useState(false);

	useEffect(() => {
		// const hasPayload = Object.keys(payload).length;
		// if (!payload) {
		// 	console.log('el formulario se mando bien pero devovio error');
		// } else {
		// 	console.log('el formulario se mando bien y devolvio todo flama');
		// }
		console.log('me actualice payload', payload);
		console.log('me actualice error', error);
		// console.log(Object.keys(payload).length);
		// hasPayload ? console.log('todobien') : console.log('todomal');
	}, [payload, error]);

	const [form, setValues] = useState({});

	const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		// const lastName = event.target.lastName.value;
		// const phone = event.target.phone.value;
		// const email = event.target.email.value;
		// const confirmEmail = event.target.confirmEmail.value;
		// const password = event.target.password.value;
		if (!name.length) {
			setInputError(true);
			console.log('pone nombre puto');
		} else {
			props.registerRequest(form);
		}
	};
	console.log('desde afuera', inputError);

	return (
		<section className='register'>
			<section className='register__container'>
				<h2>Registro</h2>
				<form action='' className='register__container--form' onSubmit={handleSubmit}>
					<TextField id='standard-basic-name' label='Nombre' name='name' onChange={handleInput} />
					<TextField id='standard-basic-lastName' label='Apellido' name='lastName' onChange={handleInput} />
					<TextField id='standard-basic-phone' label='Teléfono' name='phone' onChange={handleInput} />
					<TextField id='standard-basic-email' label='Email' name='email' onChange={handleInput} />
					<TextField id='standard-basic-confirmEmail' label='Confirmar email' name='confirmEmail' onChange={handleInput} />
					<TextField id='standard-basic-password' label='Constraseña' name='password' type='password' onChange={handleInput} />
					<Button variant='outlined' type='submit'>Registrarme</Button>
				</form>
			</section>
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