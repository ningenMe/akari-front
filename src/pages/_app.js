import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from 'organisms/Header'
import {Footer} from 'organisms/Footer'
import {HtmlHead} from 'organisms/HtmlHead'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <HtmlHead/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>)
}

export default MyApp
