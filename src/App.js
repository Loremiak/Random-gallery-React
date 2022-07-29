import './App.css';
import { ShowImages } from './components/box/Box';
import { PaginationShow } from './components/pagination/Pagination';

function App() {
	return (
		<main className='main-container'>
			<PaginationShow />
			<ShowImages />
		</main>
	);
}

export default App;
