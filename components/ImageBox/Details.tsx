import * as React from 'react';
import { css } from 'styled-jsx/css';
import Counter from '../Counter';

type DetailsProps = {
	name: string;
	searches: number;
	showCounter: boolean;
	onCompleteCounter: () => void
}

const Details: React.FC<DetailsProps> = (props) => {
	const { name, searches, showCounter, onCompleteCounter } = props;
	return (
		<div className="relative z-10">
			<h3 className="name">"{name}"</h3>
			<p className="images-text-assistant mt-2 mb-6">tiene</p>
			<h2 className="searches">
				<Counter
					shouldAnimate={showCounter}
					from={0}
					to={searches}
					onComplete={onCompleteCounter}
				/>
			</h2>
			<p className="images-text-assistant mt-2">búsquedas mensuales</p>
			<style jsx>{styles}</style>
		</div>
	)
}

const styles = css`
	.name {
		@apply text-white text-3xl font-bold leading-none;
	}
	.searches {
		@apply text-yellow-200 text-4xl font-bold leading-none;
	}

	@screen md {
		.name {
			@apply text-4xl; 
		}
		.searches {
			@apply text-5xl;
		}
	}
`

export default Details;
