import { useState } from 'react';
import { ShowImages } from './components/box/Box';
import { OrderBy } from './components/imgOrderBy/ImgOrderBy';
import { PerPage } from './components/imgPerPage/ImgPerPage';
import { Loading } from './components/loading/Loading';
import { PaginationShow } from './components/pagination/Pagination';
import { useFetchImages } from './services/useFetchData';
import styled from '@emotion/styled';
import { BtnContainer } from './components/login_registerBtn/BtnContainer';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.main`
	padding-bottom: 1.5rem;
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
const PaginationContainer = styled.div`
	background-color: rgba(255, 176, 217, 0.6);
	padding: 1.5rem;
	margin-top: 0;
	width: 100%;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

// function App() {
// 	const [dataImg, setDataImg] = useState<Images[]>([]);
// 	const [imgPerPage, setImgPerPage] = useState<number>(3);
// 	const [orderBy, setOrderBy] = useState<string>('latest');
// 	const [currentPage, setCurrentPage] = useState<number>(1);
// 	const [isLoading, setIsLoading] = useState<boolean>(false);

// 	// 	const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
// 	// const handleOnClick = () => {
// 	// setIsDetailsModalVisible((state) => !state)

// 	const getImages = useCallback(async () => {
// 		setIsLoading(true);
// 		try {
// 			const data = await fetchImages(imgPerPage, orderBy, currentPage);
// 			setDataImg(data);
// 		} catch (error) {
// 			console.log('error');
// 		}
// 		setIsLoading(false);
// 	}, [imgPerPage, orderBy, currentPage]);

// 	const sordedDate = Array.isArray(dataImg)
// 		? dataImg.sort((a, b) => {
// 				return b.created_at - a.created_at;
// 		  })
// 		: [];

// 	useEffect(() => {
// 		getImages();
// 	}, [imgPerPage, orderBy, currentPage, getImages]);

// 	return (
// 		<Wrapper>
// 			<OrderContainer>
// 				<PerPage setImgPerPage={setImgPerPage} />
// 				<OrderBy setOrderBy={setOrderBy} />
// 			</OrderContainer>
// 			<PaginationShow setCurrentPage={setCurrentPage} />
// 			{isLoading && <Loading />}
// 			<BoxContainer>
// 				<ShowImages dataImg={sordedDate} />
// 			</BoxContainer>
// 		</Wrapper>
// 	);
// }

function App() {
	const [imgPerPage, setImgPerPage] = useState(3);
	const [orderBy, setOrderBy] = useState('latest');
	const [currentPage, setCurrentPage] = useState(1);

	const { dataImg, isLoading } = useFetchImages(imgPerPage, orderBy, currentPage);

	const sordedDate = dataImg.sort((a, b) => a.created_at - b.created_at);

	return (
		<>
			<Wrapper>
				<PaginationContainer>
					<BtnContainer />
					<OrderContainer>
						<PerPage setImgPerPage={setImgPerPage} />
						<OrderBy setOrderBy={setOrderBy} />
					</OrderContainer>
					<PaginationShow setCurrentPage={setCurrentPage} />
				</PaginationContainer>
				{isLoading && <Loading />}
				<BoxContainer>
					<ShowImages dataImg={sordedDate} />
				</BoxContainer>
			</Wrapper>
			<Outlet />
		</>
	);
}

export default App;
