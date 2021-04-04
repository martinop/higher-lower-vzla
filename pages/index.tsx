import * as React from 'react';
import Head from 'next/head'
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import ImageBox from '../components/ImageBox'
import data from '../data.json';

type Item = {
  name: string;
  searches: number;
  imagePath: string;
  key: number;
}

export default function Home() {
  const [items, setItems] = React.useState({ left: data[0], right: data[1], temp: data[2] })
  const { left, right, temp } = items;
  const control = useAnimation()

  async function animate() {
    await control.start("active", { duration: 1 })
    setItems({ left: right, right: temp, temp: data[3] })
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex relative">
        <button className='absolute top-0 left-0 z-10' onClick={animate}>Animate</button>
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
            <ImageBox {...right} isComparating comparisonName={left.name} />
          </motion.div>,
          <motion.div
            animate={control}
            key={temp.key}
            variants={{ active: { right: "0%" } }}
            className="h-full w-1/2 absolute -right-1/2"
          >
            <ImageBox {...temp} isComparating comparisonName={right.name} />
          </motion.div>
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
