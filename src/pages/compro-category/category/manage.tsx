import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryManage } from 'components/organisms/compro-category/CategoryManage'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'

export const Manage: NextPage = () => {

  return (
    <>
      <HtmlHead title='compro-category category manage - ' />
      <ComproCategoryHeader />
      <CategoryManage />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
