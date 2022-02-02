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

export const listRequestId = (payload) => {
	return (dispatch) => {
		axios.get(`http://localhost:3001/${payload}`)
		.then((response) => {
			if (response.data.status !== 200) return dispatch({ type: 'LIST_ID_FAI:ED', error: response.data });
			dispatch({ type: 'LIST_REQUEST_ID', payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: 'LIST_ID_FAILED', error: err });
		});
	};
};

export const listFilters = (payload) => {
	return (dispatch) => {
		axios.post('http://localhost:3001/tracks/filters', payload)
		.then((response) => {
			console.log(response.status);
			if (response.status !== 200) return dispatch({ type: 'LIST_FAILED', error: response.data });
			dispatch({ type: 'LIST_FILTERS_TRACKS', payload: response.data.tracks });
		})
		.catch((err) => {
			dispatch({ type: 'LIST_FAILED', error: err });
		});
	};
};