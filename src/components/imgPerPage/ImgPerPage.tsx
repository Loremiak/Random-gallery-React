import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const PerPage = ({ setImgPerPage }) => {
	const handleChangeImgPerPage = (e: SelectChangeEvent<number>) => {
		setImgPerPage(e.target.value);
	};

	return (
		// <div>
		// 	<select defaultValue={3} onChange={handleChangeImgPerPage}>
		// 		<option value={3}>3</option>
		// 		<option value={4}>4</option>
		// 		<option value={5}>5</option>
		// 		<option value={6}>6</option>
		// 	</select>
		// </div>
		<FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
			<InputLabel>Images amount</InputLabel>
			<Select label='Images amount' onChange={handleChangeImgPerPage} defaultValue={3}>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
			</Select>
		</FormControl>
	);
};
