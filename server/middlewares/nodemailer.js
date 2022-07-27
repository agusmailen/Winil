const nodemailer = require('nodemailer');

const sendMail = (req, res) => {

	const { name, artist, phone, email, text } = req.body;

	contentHTML = `
		<h3>Winil tenes una nueva consulta</h3>
		<h2>Datos:</h2>
		<ul>
			<li>Nombre : ${name}</li>
			<li>artista/banda : ${artist}</li>
			<li>telefono : ${phone}</li>
			<li>Email: ${email}</li>
			<li>consulta: ${text}</li>
		</ul>
	`


	const transporter = nodemailer.createTransport({
		service: 'microsoft',
		auth: {
			user: 'agustina.marrapodi@hotmail.com',
			pass: 'cosmefulanito678/'
		},
		tls: {
			rejectUnauthorized: false
		}

	});

	let mailOptions = {
		from: email,
		to: 'marrapodiagustina@gmail.com',
		subject: 'SoundWinil consulta',
		html: contentHTML
	};

	transporter.sendMail(mailOptions, (err) => {
		if (err) {
			return res.json({ status:400, message: err });
		} else {
			return res.json({
				status: 200,
				message: 'Email enviado'
			})
		}
	});

}

module.exports = sendMail;