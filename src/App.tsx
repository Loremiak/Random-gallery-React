import React, { useEffect, useState } from 'react';
import './App.scss';
import { ShowImages } from './components/box/Box';
import { OrderBy } from './components/imgOrderBy/ImgOrderBy';
import { PerPage } from './components/imgPerPage/ImgPerPage';
import { Loading } from './components/loading/Loading';
import { PaginationShow } from './components/pagination/Pagination';
import { fetchImages } from './services/getApiImg';

function App() {
	const [dataImg, setDataImg] = useState([]);
	const [imgPerPage, setImgPerPage] = useState<number>(3);
	const [orderBy, setOrderBy] = useState<string>('latest');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// 	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
	// const handleOnClick = () => {
	// setIsDetailsModalVisible((state) => !state)

	useEffect(() => {
		const getImages = async () => {
			const data = await fetchImages({ imgPerPage, orderBy, currentPage, setIsLoading });
			await data.sort((a, b: string) => {
				return b.created_at - a.created_at;
			});
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
			<ShowImages dataImg={dataImg} />
		</main>
	);
}

export default App;
