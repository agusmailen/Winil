import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Contact extends Component {
	render() {
		return (
			<div className='contact__container'>
				<div className='contact--tittle'>
					<h1>Contacto</h1>
				</div>
				<div className=''>
					<form action='' className='contact--form'>
						<TextField id='outlined-basic' label='Nombre' variant='outlined' />
						<TextField id='outlined-basic' label='E-mail' variant='outlined' />
						<TextField id='outlined-basic' label='Teléfono' variant='outlined' />
						<TextField id='outlined-basic' label='Mensaje' variant='outlined' />
					</form>
				</div>
			</div>
		);
	};
}
export default Contact;