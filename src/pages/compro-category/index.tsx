import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategory } from 'components/organisms/compro-category/ComproCategory'
import { ComproCategoryHeader } from 'components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead title='compro-category - ' />
      <ComproCategoryHeader />
      <ComproCategory />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
