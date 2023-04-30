import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { useRouter } from 'next/router'

export const Manage = () => {

  const router = useRouter()
  const { category } = router.query
  const categorySystemName = (typeof category === 'string') ? category : ''

  return (
    <>
      <HtmlHead title={'compro-category ' + categorySystemName + ' - '} />
      <ComproCategoryHeader />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
