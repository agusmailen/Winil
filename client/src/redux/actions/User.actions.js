import axios from 'axios';
// import {  } from '../'

export const registerRequest = (payload) => ({
    type: 'REGISTER_REQUEST',
    payload,
});

// export const loginRequest = (payload) => ({
//     type: 'LOGIN_REQUEST',
//     payload,
// });
export const loginRequest = async (payload) => {
    return (dispatch) => {
        axios.post('localhost:3000/users', payload, {
            headers: {
                privateKey: 'XXXXXXX',
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