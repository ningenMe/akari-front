import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Task } from '../../components/templates/Task'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Task />
      <Footer />
    </>
  )
}
export default Index