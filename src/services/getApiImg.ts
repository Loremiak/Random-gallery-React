import { ApiData } from '../interfaces/ApiData';

const API_KEY = process.env.REACT_APP_RANDOM_GALLERY_API_KEY;

const BASE_URL = 'https://api.unsplash.com/photos/';

const fetchImages = async ({ imgPerPage, orderBy, currentPage, setIsLoading }: ApiData) => {
	setIsLoading(true);
	try {
		const response = await fetch(
			`${BASE_URL}?page=${currentPage}&per_page=${imgPerPage}&order_by=${orderBy}&client_id=${API_KEY}&auto=compress`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	} finally {
		setIsLoading(false);
	}
};

export { fetchImages };
