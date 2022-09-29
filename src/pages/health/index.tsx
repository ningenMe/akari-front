import { HtmlHead } from 'components/organisms/HtmlHead'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Health } from '../../components/organisms/health/Health'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Health />
      <Footer />
    </>
  )
}
export default Index
