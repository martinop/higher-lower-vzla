import * as React from 'react';
import Head from 'next/head'
import { AnimatePresence, motion } from "framer-motion"
import ImageBox from '../components/ImageBox'
import Points from '../components/Points'
import { MainStateProvider, useMainState } from '../stores/MainStateContext';
import { css } from 'styled-jsx/css';
import VersusText from '../components/VersusText';

function HomeWrapper() {
  return (
    <MainStateProvider>
      <Home />
    </MainStateProvider>
  )
}
function Home() {
  const { items, control } = useMainState()
  const { left, right, temp } = items;

  return (
    <div>
      <Head>
        <title>Más o menos Venezuela</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex relative overflow-x-hidden">
        <AnimatePresence>
          <motion.div
            animate={control}
            key={left.key}
            variants={{ active: { left: "-50%" } }}
            className="h-full w-1/2 absolute left-0"
          >
            <ImageBox {...left} isComparating={false} />
          </motion.div>,
          <motion.div
            animate={control}
            key={right.key}
            variants={{ active: { left: "0%" } }}
            className="h-full w-1/2 absolute left-1/2"
          >
            <ImageBox {...right} isComparating comparator={left} />
          </motion.div>,
          {temp && (
            <motion.div
              animate={control}
              key={temp.key}
              variants={{ active: { left: "50%" } }}
              className="h-full w-1/2 absolute left-full"
            >
              <ImageBox {...temp} isComparating comparator={right} />
            </motion.div>
          )}

        </AnimatePresence>
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
  .versus-container {
    @apply absolute top-1/2 left-1/2;
    transform: translate(-50%, -50%);
  }
`

export default HomeWrapper;


