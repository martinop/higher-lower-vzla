import * as React from 'react';
import cx from 'classnames';
import { motion, AnimatePresence } from "framer-motion";
import withSizes, { Sizes } from 'react-sizes';
import { useMainState } from "../stores/MainStateContext";
import ImageBox from './ImageBox';
import { css } from 'styled-jsx/css';

export type ImagesSectionSizesProps = {
	isDesktop: boolean;
};

const ImagesSection: React.FC<ImagesSectionSizesProps> = ({ isDesktop }) => {
	const { items, control } = useMainState()
  const { left, right, temp } = items;
	return (
		<AnimatePresence>
			<motion.div
				animate={control}
				key={left.key}
				variants={{ active: isDesktop ? { left: "-50%" } : { top: "-50%" } }}
				className={cx("image-section top-0 md:left-0", components.className)}
			>
				<ImageBox {...left} isComparating={false} />
			</motion.div>,
			<motion.div
				animate={control}
				key={right.key}
				variants={{ active: isDesktop ? { left: "0" } : { top: "0" } }}
				className={cx("image-section top-1/2 md:left-1/2 md:top-0", components.className)}
			>
				<ImageBox {...right} isComparating comparator={left} />
			</motion.div>,
			{temp && (
				<motion.div
					animate={control}
					key={temp.key}
					variants={{ active: isDesktop ? { left: "50%" } : { top: "50%" } }}
					className={cx("image-section top-full md:left-full md:top-0", components.className)}
				>
					<ImageBox {...temp} isComparating comparator={right} />
				</motion.div>
			)}
			{components.styles}
		</AnimatePresence>
	)
}

const components = css.resolve`
	.image-section {
		@apply absolute w-full h-1/2;
	}

	@screen md {
		.image-section {
			@apply h-full w-1/2;
		}
	}
`

const mapSizesToProps = (sizes: Sizes) => {
	const { width } = sizes;
	return { isDesktop: width >= 768 }
}

export default withSizes<ImagesSectionSizesProps>(mapSizesToProps)(ImagesSection);
