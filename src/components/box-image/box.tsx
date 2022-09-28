import { Images } from 'interfaces/Images';
import './box.scss';

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
						<div className='box' key={index}>
							<p className='box__title'>
								{!photos.current_user_collections.title ? '' : photos.current_user_collections.title}
							</p>
							<img className='box__images' src={photos.urls?.regular} alt={photos.user?.bio} loading='lazy' />
							<div className='box__container-info'>
								<div>
									<span className='box__info-by'>by</span>
									<a className='box__link' href={photos.user?.portfolio_url}>
										{photos.user?.name}
									</a>
								</div>
								<div>
									<span className='box__info-on'>on</span>
									<p className='box__date'>{new Date(photos.created_at).toLocaleDateString('en-NZ')}</p>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};
