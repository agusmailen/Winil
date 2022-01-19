import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../assets/styles/components/Contact.scss';
import icon from '../assets/static/icons8-whatsapp-160.png';

const Contact = () => {

	const handleSubmit = async (event) => {
		event.preventDefault();
		const message = {
			name: event.target.name.value,
			artist: event.target.artist.value,
			phone: event.target.phone.value,
			email: event.target.email.value,
			text: event.target.text.value,
		};
		const response = await axios.post('http://localhost:3001/sendEmail', message);
		if (response.status === 200) {
			swal({
				title: 'Mensaje enviado!',
				text: 'Pronto nos pondremos en contacto',
				icon: 'success',
			});
		} else {
			swal({
				title: 'Algo salio mal',
				text: 'Intenta más tarde por favor!',
				icon: 'failed',
			});

		}
	};

	return (
		<div className='contact__container' id='contact_id'>
			<div className='contact__container--form'>
				<p className='form-title'>SENTITE LIBRE DE CONSULTAR O COMENZAR A HABLAR SOBRE TU PROXIMO PROYECTO MUSICAL.</p>
				<div className='form__container'>
					<form className='contact--form--inputs' onSubmit={handleSubmit}>
						<div>
							<input
								type='text'
								placeholder='Nombre y Apellido'
								className='contact-input'
								name='name'
							/>
							<input
								type='text'
								placeholder='Artista/Banda'
								className='contact-input'
								name='artist'
							/>
						</div>
						<div>
							<input
								type='text'
								placeholder='Teléfono'
								className='contact-input'
								name='phone'
							/>
							<input
								type='email'
								placeholder='E-mail'
								className='contact-input'
								name='email'
							/>
						</div>
						<textarea
							id=''
							cols='45'
							rows='10'
							placeholder='Mensaje'
							className='contact-textArea'
							name='text'
						/>
						<button className='contact-button' type='submit'>ENVIAR</button>
					</form>
				</div>
			</div>
			<div className='contact__container--media'>
				<div className='contact__container--media--data'>
					<h2 className='contact--media--title'>CONTACTO</h2>
					<div className='contact-data'>
						<div className='contact-data-description'>
							<h5>TELÉFONO</h5>
							<p>+54 11 2599-6315</p>
						</div>
						<div className='contact-data-description'>
							<h5>E-MAIL</h5>
							<p>pimpcrimson.mix@gmail.com</p>
						</div>
					</div>
				</div>
				<div className='icon-wps'>
					<a href='https://api.whatsapp.com/send?phone=541138742304&text=Envia%20un%20mensaje!' target='_blank' rel='noreferrer'>
						<img src={icon} alt='' className='icon-wps-image' />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Contact;