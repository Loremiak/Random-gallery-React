import React, { useEffect, useState } from 'react';
import './Box.css';

const url = 'https://api.unsplash.com/photos/random?q=20&dpr=1&auto=compress&w=0.1&h=0.1&count=4&client_id=';
export const ShowImages = () => {
	const [dataImg, setDataImg] = useState([]);

	const fetchImages = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setDataImg(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchImages();
	}, []);

	// useEffect(() => {
	// 	const url = `https://api.unsplash.com/photos/random?q=20&dpr=1&auto=compress&w=0.1&h=0.1&count=4&client_id=B8BDe-aHPzfvCIrnMM_fRgi-a9GcOMUrva1Th6yzPcY`;
	// 	const fetchImages = async () => {
	// 		const response = await fetch(url);
	// 		const data = await response.json();
	// 		console.log(data);
	// 		setDataImg(data);
	// 	};
	// 	fetchImages();
	// }, []);

	console.log(dataImg);
	return (
		<>
			{dataImg &&
				dataImg.map((photos, index) => {
					return (
						<div className='box' key={index}>
							<p className='box-title'>
								{!photos.current_user_collections.title ? 'Anonymous' : photos.current_user_collections.title}
							</p>
							<img src={photos?.urls?.full} alt='' className='unsplash-img' loading='lazy' />
							<div className='box-description-container'>
								<div>
									<span className='by-on'>by</span>
									<a className='description' href={photos?.user?.portfolio_url}>
										{photos?.user?.name}
									</a>
								</div>
								<div>
									<span className='by-on'>on</span>
									<p className='description'>{new Date(photos.created_at).toLocaleDateString('en-NZ')}</p>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};
