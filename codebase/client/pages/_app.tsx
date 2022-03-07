import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../lib/hexStyles.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
