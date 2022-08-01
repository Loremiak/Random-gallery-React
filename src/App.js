import React, { useEffect, useState } from 'react';
import './App.scss';
import { ShowImages } from './components/box/Box.tsx';
import { OrderBy } from './components/imgOrderBy/ImgOrderBy.tsx';
import { PerPage } from './components/imgPerPage/ImgPerPage.tsx';
import { Loading } from './components/loading/Loading.tsx';
import { PaginationShow } from './components/pagination/Pagination.tsx';
import { fetchImages } from './services/getApiImg.ts';

function App() {
	const [dataImg, setDataImg] = useState([]);
	const [imgPerPage, setImgPerPage] = useState(3);
	const [orderBy, setOrderBy] = useState('latest');
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	// 	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
	// const handleOnClick = () => {
	// setIsDetailsModalVisible((state) => !state)

	useEffect(() => {
		const getImages = async () => {
			const data = await fetchImages({ imgPerPage, orderBy, currentPage, setIsLoading });
			setDataImg(data);
		};
		getImages();
	}, [imgPerPage, orderBy, currentPage]);

	return (
		<main className='main-container'>
			<PerPage setImgPerPage={setImgPerPage} />
			<OrderBy setOrderBy={setOrderBy} />
			<PaginationShow setCurrentPage={setCurrentPage} />
			{isLoading && <Loading />}
			<ShowImages setImgPerPage={setImgPerPage} setOrderBy={setOrderBy} dataImg={dataImg} />
		</main>
	);
}

export default App;
