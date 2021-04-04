import * as React from 'react';
import { animate, AnimationPlaybackControls } from "framer-motion";

type CounterProps = {
	from: number;
	to: number;
	shouldAnimate: boolean;
	onComplete: () => void;
}

const Counter: React.FC<CounterProps> = (props) => {
	const { from, to, onComplete, shouldAnimate } = props;
	const nodeRef = React.useRef();
	
	React.useEffect(() => {
		const node: HTMLElement | undefined = nodeRef?.current;
		let controls: AnimationPlaybackControls;
		if(shouldAnimate) {
			controls = animate(from, to, {
				duration: 1,
				onUpdate(value) {
					if(node) node.textContent = value.toFixed(0);
				},
				onComplete,
			});
		} else if(node) {
			node.textContent = to.toFixed(0)
		}

		return () => controls && controls.stop();
	}, [shouldAnimate, from, to]);

	return <p ref={nodeRef} />;
}

export default Counter;