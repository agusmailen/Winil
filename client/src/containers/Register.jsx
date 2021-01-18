import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registerRequest } from '../redux/actions/User.actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

	const [form, setValues] = useState({});
	const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('form', form);
		props.registerRequest(form);
		props.history.push('/');
	};

	return (
		<section className='register'>
			<section className='register__container'>
				<h2>Registro</h2>
				<form action='' className='register__container--form' onSubmit={handleSubmit}>
					<TextField id='standard-basic-name' label='Nombre' name='name' onChange={handleInput} />
					<TextField id='standard-basic-email' label='Apellido' name='lastName' onChange={handleInput} />
					<TextField id='standard-basic-email' label='Teléfono' name='phone' onChange={handleInput} />
					<TextField id='standard-basic-email' label='Email' name='email' onChange={handleInput} />
					<TextField id='standard-basic-email' label='Confirmar email' name='confirmPassword' onChange={handleInput} />
					<TextField id='standard-basic-password' label='Constraseña' name='password' type='password' onChange={handleInput} />
					<Button variant='outlined' type='submit'>Registrarme</Button>
				</form>
				<Link to='/Login'>Iniciar sesión</Link>
			</section>
		</section>
	);
};

const mapDispatchToProps = {
    registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);