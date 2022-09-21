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

interface PaginationShowProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationShow = ({ setCurrentPage }: PaginationShowProps) => {
	return (
		<Pagination
			color='secondary'
			showFirstButton
			showLastButton
			count={5}
			defaultPage={1}
			onChange={(event, value) => {
				setCurrentPage(value);
			}}
		/>
	);
};
