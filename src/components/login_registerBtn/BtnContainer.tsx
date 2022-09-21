import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const BtnDiv = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	height: auto;
	left: 1.5rem;
	top: 1.5rem;
`;
const BtnLoginRegister = styled.button`
	padding: 10px;
	border: 2px solid blueviolet;
	border-radius: 5px;
	width: 100px;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #4e258fcf;
		color: white;
		border: 2px solid black;
	}
`;

export const BtnContainer = () => {
	return (
		<BtnDiv>
			<BtnLoginRegister>
				<Link to='login'>Login</Link>
			</BtnLoginRegister>
			<BtnLoginRegister>
				<Link to='register'>Register</Link>
			</BtnLoginRegister>
		</BtnDiv>
	);
};
