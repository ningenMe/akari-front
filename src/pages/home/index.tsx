import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Home } from '../../components/templates/Home'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Home />
      <Footer />
    </>
  )
}
export default Index
