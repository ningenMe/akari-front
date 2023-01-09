import { HtmlHead } from 'components/organisms/HtmlHead'
import { Footer } from 'components/organisms/Footer'
import { Header } from 'components/organisms/Header'
import { ComproCategory } from 'components/organisms/compro-category/ComproCategory'

export const Index = () => {
  return (
    <>
      <HtmlHead title='compro-category - ' />
      <Header />
      <ComproCategory />
      <Footer />
    </>
  )
}
export default Index
