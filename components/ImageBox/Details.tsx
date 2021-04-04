import * as React from 'react';
import { css } from 'styled-jsx/css';

type DetailsProps = {
	name: string;
	searches: number;
}

const Details: React.FC<DetailsProps> = (props) => {
	const { name, searches } = props;
	return (
		<div className="relative z-10">
			<h3 className="name">"{name}"</h3>
			<p className="images-text-assistant mt-2 mb-6">tiene</p>
			<h2 className="searches">{searches}</h2>
			<p className="images-text-assistant mt-2">búsquedas mensuales</p>
			<style jsx>{styles}</style>
		</div>
	)
}

const styles = css`
	.name {
		@apply text-white text-4xl font-bold leading-none;
	}
	.searches {
		@apply text-yellow-200 text-5xl font-bold leading-none;
	}
`

export default Details;
