import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Problem } from '../../components/templates/Problem'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Problem />
      <Footer />
    </>
  )
}
export default Index
