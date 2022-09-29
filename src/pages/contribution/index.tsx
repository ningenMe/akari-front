import { HtmlHead } from 'components/organisms/HtmlHead'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Contribution } from '../../components/organisms/contribution/Contribution'

export const Index = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Contribution />
      <Footer />
    </>
  )
}
export default Index
