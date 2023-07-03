import { ApiData } from 'interfaces/ApiData';
import { useQuery } from 'react-query';

const BASE_URL = 'https://api.unsplash.com/photos/';

const API_KEY = process.env.REACT_APP_RANDOM_GALLERY_API_KEY;

export const useFetchImages = ({ imgPerPage, orderBy, currentPage }: ApiData) => {
	const data = useQuery(['imagesData', imgPerPage, orderBy, currentPage], () =>
		fetch(
			`${BASE_URL}?page=${currentPage}&per_page=${imgPerPage}&order_by=${orderBy}&client_id=${API_KEY}&auto=compress`
		).then(res => res.json())
	);
	return data;
};
