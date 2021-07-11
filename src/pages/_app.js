import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from 'organisms/Header'
import {Footer} from 'organisms/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>)
}

export default MyApp
