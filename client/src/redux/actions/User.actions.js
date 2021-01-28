import axios from 'axios';
import config from '../../config/config';

export const registerRequest = (payload) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/user', payload, {
            headers: {
                tokenKey: config.token,
            },
        })
        .then((response) => {
            if (response.data.status !== 200) dispatch({ type: 'REGISTER_FAILED', error: response.data });
            else dispatch({ type: 'REGISTER_REQUEST', payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAILED', error: err });
        });
    };
};

export const loginRequest = (payload) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/user/login', payload, {
            headers: {
                tokenKey: config.key,
            },
        })
        .then((response) => {
            dispatch({ type: 'LOGIN_REQUEST', response });
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_FAILED', response: err });
        });
    };
};

export const logoutRequest = (payload) => ({
    type: 'LOGOUT_REQUEST',
    payload,
});