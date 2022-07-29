// import TOKEN from './config.js';
// const TOKEN = 'B8BDe-aHPzfvCIrnMM_fRgi-a9GcOMUrva1Th6yzPcY';

const url = `https://api.unsplash.com/photos/random?q=20&dpr=1&auto=compress&w=0.1&h=0.1&count=4&client_id=B8BDe-aHPzfvCIrnMM_fRgi-a9GcOMUrva1Th6yzPcYxxx`;

const fetchImages = async () => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { fetchImages };
