import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../services/getApiImg';

export const PaginationShow = () => {
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		fetchImages();
	}, [setCurrentPage]);

	return (
		<Pagination
			variant='outlined'
			color='secondary'
			showFirstButton
			showLastButton
			count={10}
			defaultPage={1}
			page={currentPage}
			onChange={(e, value) => {
				setCurrentPage(value);
			}}
		/>
	);
};
