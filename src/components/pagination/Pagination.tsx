import React from 'react';
import { Pagination } from '@mui/material';

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

interface Props {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationShow = ({ setCurrentPage }: Props) => {
	return (
		<Pagination
			color='secondary'
			showFirstButton
			showLastButton
			count={5}
			defaultPage={1}
			onChange={(e, value) => {
				setCurrentPage(value);
			}}
		/>
	);
};
