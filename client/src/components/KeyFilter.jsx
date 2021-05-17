import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Key = () => {
	return (
		<div className='filter_categories'>
			<p>Key</p>
			<div className='key_filter'>
				<FormControlLabel control={<Checkbox name='checkedC' />} label='GM ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='F#M' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Am ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Bm ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Cm ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Dm ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Em ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='Fm ' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='EbM' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='DbM' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='AbM' />
				<FormControlLabel control={<Checkbox name='checkedC' />} label='BbM' />
			</div>
		</div>
	);
};

export default Key;