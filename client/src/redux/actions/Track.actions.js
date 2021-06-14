import axios from 'axios';

export const listRequest = () => {
	return (dispatch) => {
		axios.post('http://localhost:3001/list')
		.then((response) => {
			if (response.data.status !== 200) return dispatch({ type: 'LIST_FAILED', error: response.data });
			dispatch({ type: 'LIST_REQUEST', payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: 'LIST_FAILED', error: err });
		});
	};
};