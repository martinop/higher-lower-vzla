import * as React from 'react';
import Head from 'next/head'
import { AnimatePresence, motion } from "framer-motion"
import ImageBox from '../components/ImageBox'
import Points from '../components/Points'
import { MainStateProvider, useMainState } from '../stores/MainStateContext';
import { css } from 'styled-jsx/css';
import VersusText from '../components/VersusText';
import ImagesSection from '../components/ImagesSection';

function HomeWrapper() {
  return (
    <MainStateProvider>
      <Home />
    </MainStateProvider>
  )
}
function Home() {
  return (
    <div>
      <Head>
        <title>Más o menos Venezuela</title>
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
    @apply h-screen flex relative overflow-x-hidden;
  }
  .versus-container {
    @apply absolute top-1/2 left-1/2;
    transform: translate(-50%, -50%);
  }
`

export default HomeWrapper;


