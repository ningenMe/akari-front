import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { useRouter } from 'next/router'
import { TopicList } from 'components/organisms/compro-category/TopicList'

export const Manage = () => {

  const getCategorySystemName = ():string => {
    const router = useRouter()
    const { category } = router.query
    return (typeof category === 'string') ? category : ''
  }
  const categorySystemName = getCategorySystemName()

  return (
    <>
      <HtmlHead title={'compro-category ' + categorySystemName + ' - '} />
      <ComproCategoryHeader />
      <TopicList categorySystemName={categorySystemName} />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
