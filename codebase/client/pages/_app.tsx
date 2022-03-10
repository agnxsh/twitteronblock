import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../lib/hexStyles.css'
import { TwitterProvider } from '../context/TwitterContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
