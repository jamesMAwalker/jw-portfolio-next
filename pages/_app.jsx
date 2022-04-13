import '../styles/globals.scss'
import '../styles/_mixins.scss'
import 'html5-device-mockups/dist/device-mockups.min.css'
import { ScrollProgressBar } from '../components/layout/scroll-progress'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollProgressBar />
    </>
  )
}

export default MyApp
