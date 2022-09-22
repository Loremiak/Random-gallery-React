import { Link } from 'react-router-dom';
import './button.scss';

interface ButtonProp {
	destination: string;
	title: string;
	variant: '--light' | '--dark';
}

export const Button = ({ destination, title }: ButtonProp) => {
	return (
		<div className='button__container'>
			<Link className='button__button' to={destination}>
				<button>{title}</button>
			</Link>
		</div>
	);
};
