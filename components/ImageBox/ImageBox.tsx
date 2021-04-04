import * as React from 'react';
import Image from 'next/image'
import Details from './Details';
import Actions from './Actions';
import { css } from 'styled-jsx/css';
import cx from 'classnames';
import { Search } from '../../types';

type ImageBoxProps = Pick<Search, 'name' | 'searches' | 'imagePath'> & {
	isComparating: boolean;
	comparator?: Search;
	className?: string;
}

type Selection =  "higher" | "lower";

const ImageBox: React.FC<ImageBoxProps> = (props) => {
	const { name, searches, imagePath, isComparating, comparator, className } = props;
	const [revealed, setRevealed] = React.useState(false);
	const selected = React.useRef<Selection>(null);
	const showActions = isComparating && !revealed;

	function onSelect(selection: Selection) {
		setRevealed(true)
		selected.current = selection;
	}

	function onCompleteCounter() {
		const isHigherOK = selected.current === "higher" && searches > comparator.searches;
		const isLowerOK = selected.current === "lower" && searches < comparator.searches;
		if(isHigherOK || isLowerOK) {
			console.log("NEXT ROUND")
		} else {
			console.log("LOSER MODAL")
		}
	}

	return (
		<div className={cx("image-box-container", className)}>
			<Image
				alt="Left"
				src={imagePath}
				layout="fill"
				objectFit="cover"
			/>
			{showActions ? (
				<Actions
					name={name}
					onSelect={onSelect}
					comparator={comparator}
				/>
			) : (
				<Details
					name={name}
					searches={searches}
					onCompleteCounter={onCompleteCounter}
					showCounter={isComparating}
				/>
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