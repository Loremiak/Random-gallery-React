import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ImagesPerPageProps {
	setImagesPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ImagesPerPage = ({ setImagesPerPage }: ImagesPerPageProps) => {
	const handleChangeImagesPerPage = (event: SelectChangeEvent<number>) => {
		setImagesPerPage(Number(event.target.value));
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
			<InputLabel>Images amount</InputLabel>
			<Select label='Images amount' onChange={handleChangeImagesPerPage} defaultValue={3}>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
			</Select>
		</FormControl>
	);
};
