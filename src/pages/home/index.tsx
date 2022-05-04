import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Home } from '../../components/templates/Home'
import { Footer } from '../../components/organisms/Footer'
import { ResponsiveAppBar } from '../../components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <ResponsiveAppBar />
      <Home />
      <Footer />
    </>
  )
}
export default Index
