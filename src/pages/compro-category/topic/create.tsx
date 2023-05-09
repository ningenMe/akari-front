import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { ComproCategoryPageLink } from '../../../components/organisms/compro-category/ComproCategoryPageLink'
import { TopicCreate } from '../../../components/organisms/compro-category/TopicCreate'

export const Index: NextPage = () => {

  return (
    <>
      <HtmlHead title={'compro-category topic create - '} />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <TopicCreate />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
