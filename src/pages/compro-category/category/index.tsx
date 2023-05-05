import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryList } from 'components/organisms/compro-category/CategoryList'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='compro-category category - ' />
      <ComproCategoryHeader />
      <CategoryList />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
