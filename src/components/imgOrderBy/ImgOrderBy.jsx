import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const OrderBy = ({ setOrderBy }) => {
	const handleChangeOrderBy = e => {
		setOrderBy(e?.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
			<InputLabel>Order by</InputLabel>
			<Select label='Order by' onChange={handleChangeOrderBy} defaultValue={'latest'}>
				<MenuItem value='latest'>latest</MenuItem>
				<MenuItem value='oldest'>oldest</MenuItem>
				<MenuItem value='popular'>popular</MenuItem>
			</Select>
		</FormControl>
		// <div>
		// 	<select defaultValue={'latest'} onChange={handleChangeOrderBy}>
		// 		<option value={'latest'}>latest</option>
		// 		<option value={'oldest'}>oldest</option>
		// 		<option value={'popular'}>popular</option>
		// 	</select>
		// </div>
	);
};
