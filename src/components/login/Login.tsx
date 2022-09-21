import styled from '@emotion/styled';
import { FormEvent, useState } from 'react';
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

export const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(email);
		console.log(password);
	};

	return (
		<Wrapper>
			<h1>Please log in</h1>
			{/* {message && <p className='error'>{message}</p>} */}
			<form onSubmit={handleSubmit}>
				<Labels>
					<LabelP>Email</LabelP>
					<Inputs type='email' required onChange={event => setEmail(event.target.value)} />
				</Labels>
				<Labels>
					<LabelP>Password</LabelP>
					<Inputs type='password' required onChange={event => setPassword(event.target.value)} />
				</Labels>
				<BtnContainer>
					<BtnSubmit type='submit'>Log in!</BtnSubmit>
				</BtnContainer>
			</form>
			<Link to='/signUp'>Don't have account? Click to register!</Link>
		</Wrapper>
	);
};
