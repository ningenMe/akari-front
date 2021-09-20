import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <HtmlHead />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
