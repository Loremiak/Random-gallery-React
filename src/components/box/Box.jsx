// 'https://api.unsplash.com/photos/random?q=20&dpr=1&auto=compress&w=0.1&h=0.1&count=4&client_id=B8BDe-aHPzfvCIrnMM_fRgi-a9GcOMUrva1Th6yzPcYaa';

import React from 'react';
import './Box.scss';

export const ShowImages = ({ dataImg }) => {
	// const [dataImg, setDataImg] = useState([]);
	// const [imgPerPage, setImgPerPage] = useState(3);
	// const [orderBy, setOrderBy] = useState('latest');

	// const url = `https://api.unsplash.com/photos/?per_page=${imgPerPage}&order_by=${orderBy}&auto=compress&client_id=B8BDe-aHPzfvCIrnMM_fRgi-a9GcOMUrva1Th6yzPcYaa`;

	// useEffect(() => {
	// 	const getImages = async () => {
	// 		const data = await fetchImages({ imgPerPage, orderBy });
	// 		setDataImg(data);
	// 	};
	// 	getImages();
	// }, [imgPerPage, orderBy]);

	// const handleChangeImgPerPage = e => {
	// 	setImgPerPage(e?.target.value);
	// };

	// const handleChangeOrderBy = e => {
	// 	setOrderBy(e?.target.value);
	// };

	console.log(dataImg);
	console.log(dataImg.length);
	return (
		<>
			{/* <div>
				<select defaultValue={3} onChange={handleChangeImgPerPage}>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
				</select>
			</div> */}
			{/* <div>
				<select defaultValue={'latest'} onChange={handleChangeOrderBy}>
					<option value={'latest'}>latest</option>
					<option value={'oldest'}>oldest</option>
					<option value={'popular'}>popular</option>
				</select>
			</div> */}
			{dataImg &&
				dataImg.map((photos, index) => {
					return (
						<div className='box' key={index}>
							<p className='box-title'>
								{!photos.current_user_collections.title ? 'Anonymous' : photos.current_user_collections.title}
							</p>
							<img src={photos?.urls?.small} alt={photos?.user?.bio} className='unsplash-img' loading='lazy' />
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
