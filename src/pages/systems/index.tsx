import { SystemCard } from 'organisms/SystemOrganism'
import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'

export const Systems = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <SystemCard />
      <Footer />
    </>
  )
}
export default Systems
