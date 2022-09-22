import { Pagination } from '@mui/material';

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
