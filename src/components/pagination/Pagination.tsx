import React from 'react';
import { Pagination } from '@mui/material';

export const PaginationShow = ({ setCurrentPage }: any) => {
	return (
		<Pagination
			variant='outlined'
			color='secondary'
			showFirstButton
			showLastButton
			count={5}
			defaultPage={1}
			onChange={(e, value) => {
				console.log(value);
				setCurrentPage(value);
			}}
		/>
	);
};
