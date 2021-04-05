import * as React from 'react';
import cx from 'classnames';
import { motion, AnimatePresence } from "framer-motion";
import withSizes, { Sizes } from 'react-sizes';
import { useMainState } from "../stores/MainStateContext";
import ImageBox from './ImageBox';
import { css } from 'styled-jsx/css';

type ImagesSectionSizesProps = {
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
				className={cx("image-section left-section", components.className)}
			>
				<ImageBox {...left} isComparating={false} />
			</motion.div>,
			<motion.div
				animate={control}
				key={right.key}
				variants={{ active: isDesktop ? { left: "0" } : { top: "0" } }}
				className={cx("image-section right-section", components.className)}
			>
				<ImageBox {...right} isComparating comparator={left} />
			</motion.div>,
			{temp && (
				<motion.div
					animate={control}
					key={temp.key}
					variants={{ active: isDesktop ? { left: "50%" } : { top: "50%" } }}
					className={cx("image-section temp-section", components.className)}
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

	.left-section {
		@apply top-0;
	}

	.right-section {
		@apply top-1/2;
	}

	.temp-section {
		@apply top-full;
	}

	@screen md {
		.image-section {
			@apply h-full w-1/2;
		}

		.left-section {
			@apply left-0;
		}
		.right-section {
			@apply left-1/2 top-0;
		}

		.temp-section {
			@apply left-full top-0
		}
	}
`

const mapSizesToProps = (sizes: Sizes) => {
	const { width } = sizes;
	return { isDesktop: width >= 768 }
}

export default withSizes<ImagesSectionSizesProps>(mapSizesToProps)(ImagesSection);
