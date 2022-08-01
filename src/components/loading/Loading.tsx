import React from 'react';
import './Loading.scss';

export const Loading = () => {
	return (
		<div className='loading-container'>
			<img src='https://img.icons8.com/fluency/344/spinner-frame-6.png' alt='loading' className='loading' />
		</div>
	);
};
