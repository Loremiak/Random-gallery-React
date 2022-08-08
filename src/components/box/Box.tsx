import styled from '@emotion/styled';
import React from 'react';
import { Images } from '../../interfaces/Images';

const Box = styled.div`
	position: relative;
	background-color: aliceblue;
	border: #660066 solid 3px;
	width: 85%;
	max-width: 400px;
	height: auto;
	border-radius: 15px;
	overflow: hidden;
`;
const BoxTitle = styled.p`
	font-weight: bold;
	padding: 0.5rem 0 1.5rem 0.5rem;
	@media (min-width: 667px) {
		position: absolute;
		padding: 0;
		font-size: 1.25rem;
		bottom: 70px;
		left: 20px;
		z-index: 1;
	}
`;
const ImgSize = styled.img`
	width: 100%;
	height: 100%;
`;
const BoxDescriptionContainer = styled.div`
	position: absolute;
	bottom: 0;
	background-color: rgba(240, 248, 255, 0.363);
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	width: 100%;
	height: 50px;
	padding: 0.5rem 0;
	@media (min-width: 667px) {
		height: 125px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0.7) 35%,
			rgba(255, 255, 255, 0.8) 100%
		);
		align-items: flex-end;
		justify-content: space-evenly;
		padding-bottom: 1.25rem;
	}
`;
const DescriptionDetailsInfo = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-around;
`;
const ByOnInfo = styled.span`
	font-weight: bold;
	font-size: 0.75rem;
	@media (min-width: 667px) {
		padding-bottom: 0.5rem;
	}
`;
const Link = styled.a`
	color: darkviolet;
`;
const DateInfo = styled.p`
	font-size: 0.75rem;
	margin-top: 0.5rem;
	@media (min-width: 667px) {
		font-size: 1rem;
		margin-top: 0.75rem;
	}
`;
interface ShowImagesProps {
	dataImg: Images[];
}

export const ShowImages = ({ dataImg }: ShowImagesProps) => {
	if (!dataImg) return null;
	return (
		<>
			{dataImg &&
				dataImg.map((photos, index) => {
					return (
						<Box key={index}>
							<BoxTitle>
								{!photos.current_user_collections.title ? 'Anonymous' : photos.current_user_collections.title}
							</BoxTitle>
							<ImgSize src={photos.urls?.regular} alt={photos.user?.bio} loading='lazy' />
							<BoxDescriptionContainer>
								<DescriptionDetailsInfo>
									<ByOnInfo>by</ByOnInfo>
									<Link href={photos.user?.portfolio_url}>{photos.user?.name}</Link>
								</DescriptionDetailsInfo>
								<DescriptionDetailsInfo>
									<ByOnInfo>on</ByOnInfo>
									<DateInfo>{new Date(photos.created_at).toLocaleDateString('en-NZ')}</DateInfo>
								</DescriptionDetailsInfo>
							</BoxDescriptionContainer>
						</Box>
					);
				})}
		</>
	);
};
