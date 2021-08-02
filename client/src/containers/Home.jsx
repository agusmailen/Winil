//React
import React, { Fragment } from 'react';
//Components
import Header from '../components/Header';
import Catalogue from '../components/Catalogo';
import Contact from '../components/Contact';
//Style
import '../assets/styles/App.scss';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Catalogue>
			</Catalogue>
			<Contact />
		</Fragment>
	);
};
export default Home;