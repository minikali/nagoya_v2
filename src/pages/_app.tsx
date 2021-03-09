import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

const App: React.ReactNode = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
