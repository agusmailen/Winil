import React, { Fragment } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import '../assets/styles/App.scss';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Contact />
		</Fragment>
	);
};
export default Home;