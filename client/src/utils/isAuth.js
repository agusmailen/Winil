import axios from 'axios';
import config from '../config/config';

const isAuthOk = async (jwt) => {
	const request = await axios.post('http://localhost:3001/user/verifyToken', { token: jwt }, {
		headers: {
			tokenKey: config.token,
		},
	});
	try {
		if (request.status !== 200) return false;
		return request.data;
	} catch (error) {
		return err;
	};
};

const isAuth = () => {
	const jwt = localStorage.getItem('token') ? localStorage.getItem('token') : null;
	if (jwt && isAuthOk(jwt)) {
		return true;
	};
};

export default isAuth;