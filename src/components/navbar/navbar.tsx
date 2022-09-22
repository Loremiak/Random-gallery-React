import { useState } from 'react';
import { useFetchImages } from '../../services/useFetchData';
import { Button } from '../buttons/button/button';
import { ImagesOrderBy } from '../images-sort/images-order-by/images-order-by';
import { ImagesPerPage } from '../images-sort/images-per-page/images-per-page';
import { PaginationShow } from '../images-sort/pagination/pagination';
import './navbar.scss';

export const Navbar = () => {
	const [imgPerPage, setImgPerPage] = useState(3);
	const [orderBy, setOrderBy] = useState('latest');
	const [currentPage, setCurrentPage] = useState(1);

	useFetchImages(imgPerPage, orderBy, currentPage);

	return (
		<div className='navbar'>
			<div className='navbar__buttons'>
				<Button destination='login' title='Login' variant='--light'></Button>
				<Button destination='register' title='Register' variant='--light'></Button>
			</div>
			<div className='navbar__menu'>
				<ImagesPerPage setImagesPerPage={setImgPerPage} />
				<ImagesOrderBy setOrderBy={setOrderBy} />
			</div>
			<PaginationShow setCurrentPage={setCurrentPage} />
		</div>
	);
};
