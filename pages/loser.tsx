import * as React from 'react';
import Head from 'next/head'
import { css } from 'styled-jsx/css';
import Image from 'next/image';
import { useMainState } from '../stores/MainStateContext';
import Button from '../components/Button';
import { useRouter } from 'next/router';

function Loser() {
	const router = useRouter()
	const { score, reset} = useMainState()

	function onPlayAgain() {
		reset()
		router.push("/")
	}

  return (
    <div>
      <Head>
        <title>Más o menos | Venezuela</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
				<div className="bg-wrap">
					<Image
						alt="Loser"
						src="/cristiano-sad.gif"
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</div>
				<div className="text-wrap">
					<p className="text-2xl">Has perdido, tu puntaje fue:</p>
					<h1 className="text-8xl mt-2 mb-4 text-yellow-500 font-semibold">{score}</h1>
					<div className="max-w-md text-center">
						<p className="text-xl font-light">¿Te lo hicimos demasiado difícil? Estamos bastante decepcionados de ti en este momento.</p>
					</div>
					<Button
						className="mt-8 self-center"
						onClick={onPlayAgain}
					>
						Jugar de nuevo
					</Button>

					<span className="mt-20">Hecho por <a className="font-semibold hover:text-yellow-500" target="_blank" href="https://twitter.com/martinocandop">Martin Ocando🇻🇪</a></span>
				</div>
      </main>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
	.bg-wrap {
		@apply fixed h-screen w-screen overflow-hidden;
		z-index: -1;
	}
	.text-wrap {
		@apply h-screen w-screen flex flex-col justify-center items-center text-white;
    background: rgba(0, 0, 0, 0.7);
	}
`

export default Loser;


