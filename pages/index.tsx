import * as React from 'react';
import Head from 'next/head'
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import ImageBox from '../components/ImageBox'
import { MainStateProvider, useMainState } from '../stores/MainStateContext';

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

      <main className="h-screen flex relative">
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
            className="h-full w-1/2 absolute right-0"
          >
            <ImageBox {...right} isComparating comparator={left} />
          </motion.div>,
          {temp && (
            <motion.div
              animate={control}
              key={temp.key}
              variants={{ active: { right: "0%" } }}
              className="h-full w-1/2 absolute -right-1/2"
            >
              <ImageBox {...temp} isComparating comparator={right} />
            </motion.div>
          )}

        </AnimatePresence>
        <div className="vs">
          <h1 className="text-3xl font-bold m-auto">VS</h1>
        </div>
      </main>
      <style jsx>{`
        .vs {
          @apply absolute top-1/2 left-1/2 bg-white rounded-full h-24 w-24 flex;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

export default HomeWrapper;


