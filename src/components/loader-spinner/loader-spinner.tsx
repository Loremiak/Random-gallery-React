import './loader-spinner.scss';

export const LoaderSpinner = () => {
	return (
		<div className='loader'>
			<img
				className='loader__image'
				src='https://img.icons8.com/fluency/344/spinner-frame-6.png'
				alt='loader-spinner'
			/>
		</div>
	);
};
