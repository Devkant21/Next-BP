import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      < Navbar />
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
