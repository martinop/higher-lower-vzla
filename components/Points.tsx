import { css } from "styled-jsx/css";
import { useMainState } from "../stores/MainStateContext"

function Points() {
	const { highScore, score } = useMainState()
	return (
		<>
		  <div className="points left-4 md:left-8">
				Max. Puntos: {highScore}
			</div>
			<div className="points right-4 md:right-8">
				Puntos: {score}
			</div>
			<style jsx>{styles}</style>
		</>
	)
}

const styles = css`
	.points {
		@apply absolute bottom-3 z-10 text-white font-bold;
	}

	@screen md {
		.points {
			@apply bottom-6 text-2xl;
		}
	}
`

export default Points;
