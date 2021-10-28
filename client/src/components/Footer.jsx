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
//import YouTubeIcon from '@mui/icons-material/YouTube';
//import InstagramIcon from '@mui/icons-material/Instagram';
import image from '../assets/static/tecladito.png';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<img src={image} alt='' />
			<Link2 id='button-arrow-footer' smooth={true} duration={1000} to='header'>
				<IconButton aria-label='delete' size='large' id='button-arrow-footer' className='parpadea'>
					<ArrowUpwardIcon size='large' id='iconArrow-empty-cart' />
				</IconButton>
			</Link2>
			<div className='icons-socialMedia-footer'>
				<a href='https://www.beatstars.com/sugav/feed' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/youtube-play--v1.png' alt='' id='footer-icon-social' />
				</a>
				<a href='https://www.beatstars.com/sugav/feed' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluency-systems-regular/48/000000/b.png' alt='' id='footer-icon-social' />
				</a>
				<a href='https://www.beatstars.com/sugav/feed' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/soundcloud.png' alt='' id='footer-icon-social' />
				</a>
				<a href='https://www.beatstars.com/sugav/feed' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/instagram-new.png' alt='' id='footer-icon-social' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;