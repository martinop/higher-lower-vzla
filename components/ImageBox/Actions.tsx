import * as React from 'react';
import { css } from 'styled-jsx/css';
import { Search } from '../../types';
import Button from '../Button';

type ActionsProps = {
	name: string;
	comparator: Search;
	onSelect: (option: "higher" | "lower") => void;
}

const Actions: React.FC<ActionsProps> = (props) => {
	const { name, comparator, onSelect } = props;
	return (
		<div className="actions-container">
			<h3 className="primary-name">"{name}"</h3>
			<p className="images-text-assistant mt-2 mb-6">tiene</p>
			<Button
				className="self-center w-48"
				onClick={() => onSelect("higher")}
			>
				Más
				<svg
					className="ml-2"
					xmlns="http://www.w3.org/2000/svg"
					width="18" 
					height="18"
					viewBox="0 0 24 24"
				>
					<path d="M24 22h-24l12-20z" fill="currentColor" />
				</svg>
			</Button>
			<Button
				className="mt-4 self-center w-48"
				onClick={() => onSelect("lower")}
			>
				Menos
				<svg
					className="ml-2"
					xmlns="http://www.w3.org/2000/svg"
					width="18" 
					height="18"
					viewBox="0 0 24 24"
				>
					<path d="M12 21l-12-18h24z" fill="currentColor" />
				</svg>
			</Button>
			<p className="images-text-assistant mt-3">búsquedas que <span className="font-bold">{comparator.name}</span></p>

			<style jsx>{styles}</style>
		</div>
	)
}

const styles = css`
	.actions-container {
		@apply relative z-10 flex flex-col w-full;
	}
	.primary-name {
		@apply text-white text-4xl font-bold leading-none;
	}
`

export default Actions;
