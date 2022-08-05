import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadingElement = styled.img`
	animation: ${rotate} 4s infinite;
`;

export const Loading = () => {
	return (
		<LoadingContainer>
			<LoadingElement src='https://img.icons8.com/fluency/344/spinner-frame-6.png' alt='loading' />
		</LoadingContainer>
	);
};
