import axios from 'axios';

export const createFilters = () => {
	return (dispatch) => {
		axios.post('http://localhost:3001/filters')
		.then((response) => {
			if (response.status !== 200) return dispatch({ type: 'SET_FAILED', error: response.data });
			dispatch({ type: 'SET_FILTERS', payload: response.data.components });
		})
		.catch((err) => {
			dispatch({ type: 'SET_FAILED', error: err });
		});
	};
};