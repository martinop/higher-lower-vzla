import * as React from 'react';
import cx from 'classnames';

type ButtonProps = {
	onClick: (value: any) => void
	children: React.ReactElement | string | (string | JSX.Element)[]
	className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { children, onClick, className } = props; 
	return (
		<button onClick={onClick} className={cx("button", className)}>
			{children}
			<style jsx>{`
				.button {
					@apply outline-none rounded-3xl border-white border-2 py-3 px-12 text-white transition duration-300 ease-in-out font-semibold flex justify-center items-center;
				}
				.button:hover {
					@apply bg-white text-black;
				}
			`}</style>
		</button>
	)
}

export default Button;