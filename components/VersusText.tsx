import * as React from 'react'
import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import cx from 'classnames';
import { useMainState } from '../stores/MainStateContext';
import { VersusAnimation } from '../enums';

const variants = {
  [VersusAnimation.HIDDEN]: { scale: 0 },
  [VersusAnimation.VISIBLE]: { scale: 1 },
}
function VersusText() {
	const { versusRef, versusControl } = useMainState()

	React.useEffect(() => {
		versusControl.start(VersusAnimation.VISIBLE)
	}, [versusControl])

	return (
		<motion.div
			initial={VersusAnimation.HIDDEN}
			animate={versusControl}
			variants={variants}
			transition={{ duration: 0.5 }}
			className={cx("vs", components.className)}
		>
			<h1 className="vs-text">VS</h1>
			<div ref={versusRef} className="absolute w-full bottom-0" />
			{components.styles}
			<style jsx>{styles}</style>
		</motion.div>
	)
}


const components = css.resolve`
	.vs {
		@apply relative bg-white overflow-hidden rounded-full h-16 w-16 flex;
	}
`

const styles = css`
	.vs-text {
		@apply text-3xl font-bold m-auto;
	}
`

export default VersusText;