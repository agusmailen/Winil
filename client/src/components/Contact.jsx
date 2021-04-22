import React, { Component } from 'react';
import '../assets/styles/components/Contact.scss';
import icon from '../assets/static/icons8-whatsapp-160.png';

class Contact extends Component {
	render() {
		return (
			<div className='contact__container'>
				<div className='contact__container--form'>
					<p className='form-title'>SENTITE LIBRE DE CONSULTAR O COMENZAR A HABLAR SOBRE TU PROXIMO PROYECTO MUSICAL.</p>
					<div className='form__container'>
						<form className='contact--form--inputs'>
							<div>
								<input
									type='text'
									placeholder='Nombre y Apellido'
									className='contact-input'
								/>
								<input
									type='text'
									placeholder='Artista/Banda'
									className='contact-input'
								/>
							</div>
							<div>
								<input
									type='text'
									placeholder='Teléfono'
									className='contact-input'
								/>
								<input
									type='email'
									placeholder='E-mail'
									className='contact-input'
								/>
							</div>
							<textarea
								name=''
								id=''
								cols='45'
								rows='10'
								placeholder='Mensaje'
								className='contact-textArea'
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
								<p>+54 153874-2304</p>
							</div>
							<div className='contact-data-description'>
								<h5>E-MAIL</h5>
								<p>winil@gmail.com</p>
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
}
export default Contact;