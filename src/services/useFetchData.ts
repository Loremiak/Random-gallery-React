// import { Images } from '../interfaces/Images';

// const API_KEY = process.env.REACT_APP_RANDOM_GALLERY_API_KEY;

// const BASE_URL = 'https://api.unsplash.com/photos/';

// type FetchImagesType = (imgPerPage: number, orderBy: string, currentPage: number) => Promise<Images[]>;

// const fetchImages: FetchImagesType = async (imgPerPage, orderBy, currentPage) => {
// 	try {
// 		const response = await fetch(
// 			`${BASE_URL}?page=${currentPage}&per_page=${imgPerPage}&order_by=${orderBy}&client_id=${API_KEY}&auto=compress`
// 		);
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export { fetchImages };

import { Images } from 'interfaces/Images';
import { useCallback, useEffect, useState } from 'react';

// interface ImagesSortProps {
// 	imgPerPage: number;
// 	orderBy: string;
// 	currentPage: number;
// }

const API_KEY = process.env.REACT_APP_RANDOM_GALLERY_API_KEY;

const BASE_URL = 'https://api.unsplash.com/photos/';

const GET_IMAGES_URL = (imgPerPage: number, orderBy: string, currentPage: number) =>
	`?page=${currentPage}&per_page=${imgPerPage}&order_by=${orderBy}&client_id=${API_KEY}&auto=compress`;

export const useFetchImages = (imgPerPage: number, orderBy: string, currentPage: number) => {
	const [dataImg, setDataImg] = useState<Images[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);

	const fetchImages = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_URL}${GET_IMAGES_URL(imgPerPage, orderBy, currentPage)}`);
			const data = await response.json();
			setDataImg(data);
		} catch (err) {
			setError(err);
		}
		setIsLoading(false);
	}, [currentPage, imgPerPage, orderBy]);

	useEffect(() => {
		fetchImages();
	}, [fetchImages]);

	return { dataImg, error, isLoading, fetchImages };
};
