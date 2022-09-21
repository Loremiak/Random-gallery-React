import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface OrderByProps {
	setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export const OrderBy = ({ setOrderBy }: OrderByProps) => {
	const handleChangeOrderBy = (event: SelectChangeEvent<string>) => {
		setOrderBy(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
			<InputLabel>Order by</InputLabel>
			<Select label='Order by' onChange={handleChangeOrderBy} defaultValue='latest'>
				<MenuItem value='latest'>latest</MenuItem>
				<MenuItem value='oldest'>oldest</MenuItem>
				<MenuItem value='popular'>popular</MenuItem>
			</Select>
		</FormControl>
	);
};
