import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	height: 55vh;
	width: 300px;
	margin: 0 auto;
	background-color: white;
	border-radius: 10px;
	border: #660066 solid 3px;
`;
const Labels = styled.label`
	width: 100%;
`;
const LabelP = styled.label`
	margin-bottom: 5px;
`;
const Inputs = styled.input`
	width: 100%;
	padding: 0.5rem;
	border: 0;
	border-bottom: 3px solid blueviolet;
`;
const BtnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const BtnSubmit = styled.button`
	padding: 10px;
	margin: 20px auto;
	border: 2px solid blueviolet;
	width: 100px;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #4e258fcf;
		color: white;
		border: 2px solid black;
	}
`;

export const Register = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		// const token = await loginUser({
		// 	username,
		// 	password,
		// });
		// setToken(token);
	};

	return (
		<Wrapper>
			<h1>Please sign up</h1>
			<form onSubmit={handleSubmit}>
				<Labels>
					<LabelP>Email</LabelP>
					<Inputs type='email' onChange={e => setEmail(e.target.value)} />
				</Labels>
				<Labels>
					<LabelP>Password</LabelP>
					<Inputs type='password' onChange={e => setPassword(e.target.value)} />
				</Labels>
				<BtnContainer>
					<BtnSubmit type='submit'>Register!</BtnSubmit>
				</BtnContainer>
			</form>
			<Link to='/'>Back</Link>
		</Wrapper>
	);
};
