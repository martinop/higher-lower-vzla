import * as React from 'react';
import Image from 'next/image'
import Details from './Details';
import Actions from './Actions';
import { css } from 'styled-jsx/css';
import cx from 'classnames';

type ImageBoxProps = {
	name: string;
	searches: number;
	imagePath: string;
	isComparating: boolean;
	className?: string;
	comparisonName?: string;
}
const ImageBox: React.FC<ImageBoxProps> = (props) => {
	const { name, searches, imagePath, isComparating, comparisonName, className } = props;
	return (
		<div className={cx("image-box-container", className)}>
			<Image
				alt="Left"
				src={imagePath}
				layout="fill"
				objectFit="cover"
			/>
			{isComparating ? (
				<Actions
					name={name}
					onSelect={console.log}
					comparisonName={comparisonName}
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
		@apply h-full relative flex justify-center items-center text-center;
	}
	.overlay {
		@apply inset-0 absolute bg-black bg-opacity-60 w-full h-full;
	}
`

export default ImageBox;