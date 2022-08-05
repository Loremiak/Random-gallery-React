import React from 'react';
import { Pagination } from '@mui/material';
import './Pagi.scss';

// import { createTheme } from '@mui/material';

// import { deepPurple } from '@mui/material/colors';

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: deepPurple[500],
// 			contrastText: '#ffcc00',
// 		},
// 	},
// });

export const PaginationShow = ({ setCurrentPage }: any) => {
	return (
		<Pagination
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
