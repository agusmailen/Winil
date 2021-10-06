//React
import React from 'react';
//import { Link as Link1 } from 'react-router-dom';
//React Scroll
import { Link as Link2 } from 'react-scroll';
//Styles
import '../assets/styles/components/Footer.scss';
//Meterial
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import image from '../assets/static/tecladito.png';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<img src={image} alt='' />
			<Link2 to='header' smooth={true} duration={900}>
				<IconButton aria-label='delete' size='large' id='button-arrow-footer'>
					<ArrowUpwardIcon size='large' id='iconArrow-empty-cart' />
				</IconButton>
			</Link2>
			<div className='icons-socialMedia-footer'>
				<YouTubeIcon id='icon-footer' />
				<InstagramIcon id='icon-footer' />
			</div>
		</footer>
	);
};

export default Footer;