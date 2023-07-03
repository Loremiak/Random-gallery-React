import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/' element={<App />}></Route>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
