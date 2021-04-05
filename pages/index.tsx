import * as React from 'react';
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Points from '../components/Points'
import { css } from 'styled-jsx/css';
import VersusText from '../components/VersusText';

const ImagesSection = dynamic(() => import('../components/ImagesSection'), { ssr: false })

function Home() {
  return (
    <div>
      <Head>
        <title>Más o menos | Venezuela</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImagesSection />
        <div className="versus-container">
          <VersusText />
        </div>
        <Points />
      </main>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  main {
    @apply h-screen flex relative overflow-hidden;
  }
  .versus-container {
    @apply absolute top-1/2 left-1/2;
    transform: translate(-50%, -50%);
  }
`

export default Home;


