//React
import React, { Fragment } from 'react';
//Components
import Header from '../components/Header';
import Catalogue from '../components/Catalogo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
//Style
import '../assets/styles/App.scss';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Catalogue>
			</Catalogue>
			<Contact />
			<Footer />
		</Fragment>
	);
};
export default Home;