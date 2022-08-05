import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { ShowImages } from './components/box/Box';
import { OrderBy } from './components/imgOrderBy/ImgOrderBy';
import { PerPage } from './components/imgPerPage/ImgPerPage';
import { Loading } from './components/loading/Loading';
import { PaginationShow } from './components/pagination/Pagination';
import { Images } from './interfaces/Images';
import { fetchImages } from './services/getApiImg';
import styled from '@emotion/styled';

const Wrapper = styled.main`
	padding: 1.5rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: 667px) {
			gap: 2.5rem;
		}
	}
`;
const OrderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: 667px) {
		flex-direction: row;
	}
`;
const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	@media (min-width: 996px) {
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 65%;
	}
`;

function App() {
	const [dataImg, setDataImg] = useState<Images[]>([]);
	const [imgPerPage, setImgPerPage] = useState<number>(3);
	const [orderBy, setOrderBy] = useState<string>('latest');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// 	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
	// const handleOnClick = () => {
	// setIsDetailsModalVisible((state) => !state)

	const getImages = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await fetchImages({ imgPerPage, orderBy, currentPage, setIsLoading });
			setDataImg(data);
		} catch (error) {
			console.log('error');
		}
		setIsLoading(false);
	}, [imgPerPage, orderBy, currentPage]);

	const sordedDate =
		dataImg &&
		dataImg.sort((a, b) => {
			return b.created_at - a.created_at;
		});

	useEffect(() => {
		getImages();
	}, [imgPerPage, orderBy, currentPage, getImages]);

	return (
		<Wrapper>
			<OrderContainer>
				<PerPage setImgPerPage={setImgPerPage} />
				<OrderBy setOrderBy={setOrderBy} />
			</OrderContainer>
			<PaginationShow setCurrentPage={setCurrentPage} />
			{isLoading && <Loading />}
			<BoxContainer>
				<ShowImages dataImg={sordedDate} />
			</BoxContainer>
		</Wrapper>
	);
}

export default App;
