import { HtmlHead } from 'components/organisms/HtmlHead'
import { Home } from '../../components/templates/Home'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead title='' />
      <Header />
      <Home />
      <Footer />
    </>
  )
}
export default Index
