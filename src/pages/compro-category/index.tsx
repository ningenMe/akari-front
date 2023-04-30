import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryList } from 'components/organisms/compro-category/CategoryList'
import { ComproCategoryHeader } from 'components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead title='compro-category - ' />
      <ComproCategoryHeader />
      <CategoryList />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
