import Head from 'next/head'
import ImageBox from '../components/ImageBox'
import data from '../data.json';

export default function Home() {
  const left = data[0]
  const right = data[1];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex relative">
        <ImageBox {...left} isComparating={false} />
        <ImageBox {...right} isComparating comparasinName={left.name} />
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
