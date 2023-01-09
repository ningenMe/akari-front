import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryManage } from '../../../components/organisms/compro-category/CategoryManage'
import { ComproCategoryHeader } from '../../../components/organisms/Header'

export const Manage = () => {

  return (
    <>
      <HtmlHead title='compro-category - ' />
      <ComproCategoryHeader />
      <CategoryManage />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
