import React, { Fragment } from 'react';
import Header from '../components/Header';
import Catalogue from '../components/Catalogo';
// import CatalogueItem from '../components/CatalogoItem';
import Contact from '../components/Contact';
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