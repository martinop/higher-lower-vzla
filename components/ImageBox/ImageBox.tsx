import * as React from 'react';
import Image from 'next/image'
import Details from './Details';
import Actions from './Actions';
import { css } from 'styled-jsx/css';

type ImageBoxProps = {
	name: string;
	searches: number;
	imagePath: string;
	isComparating: boolean;
	comparasinName?: string;
}
const ImageBox: React.FC<ImageBoxProps> = (props) => {
	const { name, searches, imagePath, isComparating, comparasinName } = props;
	return (
		<div className="image-box-container">
			<Image
				alt="Left"
				src={imagePath}
				layout="fill"
				objectFit="cover"
				quality={100}
			/>
			{isComparating ? (
				<Actions
					name={name}
					onSelect={console.log}
					comparasinName={comparasinName}
				/>
			) : (
				<Details name={name} searches={searches} />
			)}
			<div className="overlay" />
			<style jsx>{styles}</style>
		</div>
	)
}

const styles = css`
	.image-box-container {
		@apply w-1/2 h-full relative flex justify-center items-center text-center;
	}
	.overlay {
		@apply inset-0 absolute bg-black bg-opacity-60 w-full h-full;
	}
`

export default ImageBox;