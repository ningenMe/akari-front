import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryList } from 'components/organisms/compro-category/CategoryList'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { ComproCategoryPageLink } from '../../../components/organisms/compro-category/ComproCategoryPageLink'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='compro-category category - ' />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <CategoryList />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
