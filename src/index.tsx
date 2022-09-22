import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					{/* <Route path='login' element={<Login />}></Route> */}
					<Route path='login' element={<Login />}></Route>
					<Route path='register' element={<Register />}></Route>
					{/* <Route path='detail/:id' element={<Details />}></Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
