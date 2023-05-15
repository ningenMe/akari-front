import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { ComproCategoryPageLink } from '../../../components/organisms/compro-category/ComproCategoryPageLink'
import { TopicList } from '../../../components/organisms/compro-category/TopicList'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='compro-category topic - ' />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <TopicList />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
