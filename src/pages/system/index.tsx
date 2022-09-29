import { HtmlHead } from 'components/organisms/HtmlHead'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { System } from '../../components/organisms/system/System'

export const Index = () => {
  return (
    <>
      <HtmlHead title='system - ' />
      <Header />
      <System />
      <Footer />
    </>
  )
}
export default Index
