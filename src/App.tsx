import { useState } from 'react';
import { LoaderSpinner } from './components/loader-spinner/loader-spinner';
import { useFetchImages } from './services/useFetchData';
import { ImagesPerPage } from './components/images-sort/images-per-page/images-per-page';
import { PaginationShow } from './components/images-sort/pagination/pagination';
import { ShowImages } from './components/box-image/box';
import { ImagesOrderBy } from './components/images-sort/images-order-by/images-order-by';
import './app.scss';

function App() {
	const [imgPerPage, setImgPerPage] = useState(3);
	const [orderBy, setOrderBy] = useState('latest');
	const [currentPage, setCurrentPage] = useState(1);

	const { data: images, isLoading } = useFetchImages({ imgPerPage, orderBy, currentPage });

	console.log(images);

	return (
		<div className='main'>
			<div className='navbar'>
				<div className='navbar__menu'>
					<ImagesPerPage setImagesPerPage={setImgPerPage} />
					<ImagesOrderBy setOrderBy={setOrderBy} />
				</div>
				<PaginationShow setCurrentPage={setCurrentPage} />
			</div>
			{isLoading && <LoaderSpinner />}
			<div className='box__container-image'>
				<ShowImages dataImg={images} />
			</div>
		</div>
	);
}

export default App;
