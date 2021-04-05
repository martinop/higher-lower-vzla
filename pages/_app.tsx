import { MainStateProvider } from '../stores/MainStateContext';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <MainStateProvider>
      <Component {...pageProps} />
    </MainStateProvider>
  )
}

export default MyApp
