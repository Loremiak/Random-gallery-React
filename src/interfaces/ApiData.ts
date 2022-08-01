export interface ApiData {
	imgPerPage: number;
	orderBy: string;
	currentPage: number;
	setIsLoading: (isLoading: boolean) => void;
}
