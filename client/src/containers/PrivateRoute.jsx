import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuth from '../utils/isAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={props => (
			isAuth() ?
				<Component {...props} />
			:
				<Redirect to='/Login' />
		)}
		/>
	);
};

export default PrivateRoute;