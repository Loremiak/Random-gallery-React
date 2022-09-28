import { useState } from 'react';
import { LoaderSpinner } from './components/loader-spinner/loader-spinner';
import { useFetchImages } from './services/useFetchData';
import { Outlet } from 'react-router-dom';
import { ImagesPerPage } from './components/images-sort/images-per-page/images-per-page';
import { PaginationShow } from './components/images-sort/pagination/pagination';
import { ShowImages } from './components/box-image/box';
import { ImagesOrderBy } from './components/images-sort/images-order-by/images-order-by';
import { Button } from 'components/buttons/button/button';
import './app.scss';

function App() {
	const [imgPerPage, setImgPerPage] = useState(3);
	const [orderBy, setOrderBy] = useState('latest');
	const [currentPage, setCurrentPage] = useState(1);

	const { dataImg, isLoading } = useFetchImages(imgPerPage, orderBy, currentPage);

	const sordedDate = dataImg.sort((a, b) => a.created_at - b.created_at);

	return (
		<>
			<div className='main'>
				<div className='navbar'>
					<div className='navbar__buttons'>
						<Button destination='login' title='In progress...'></Button>
						<Button destination='register' title='In progress...'></Button>
					</div>
					<div className='navbar__menu'>
						<ImagesPerPage setImagesPerPage={setImgPerPage} />
						<ImagesOrderBy setOrderBy={setOrderBy} />
					</div>
					<PaginationShow setCurrentPage={setCurrentPage} />
				</div>
				{isLoading && <LoaderSpinner />}
				<div className='box__container-image'>
					<ShowImages dataImg={sordedDate} />
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default App;
