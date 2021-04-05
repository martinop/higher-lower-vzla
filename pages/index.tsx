import * as React from 'react';
import Head from 'next/head'
import Points from '../components/Points'
import { css } from 'styled-jsx/css';
import VersusText from '../components/VersusText';
import ImagesSection from '../components/ImagesSection';

function Home({ isDesktopSSR }) {
  return (
    <div>
      <Head>
        <title>Más o menos | Venezuela</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImagesSection isDesktopSSR={isDesktopSSR} />
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

export async function getServerSideProps(context) {
  const UA = context.req.headers['user-agent'];
  const isDesktopSSR = !Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return { props: { isDesktopSSR } }
}

export default Home;


