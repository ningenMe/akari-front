import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryManage } from 'components/organisms/compro-category/CategoryManage'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { ComproCategoryPageLink } from '../../../components/organisms/compro-category/ComproCategoryPageLink'

export const Manage: NextPage = () => {

  return (
    <>
      <HtmlHead title='compro-category category manage - ' />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <CategoryManage />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
