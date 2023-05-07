import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { ProblemCreate } from 'components/organisms/compro-category/ProblemCreate'
import { NextPage } from 'next'
import { ComproCategoryPageLink } from '../../../components/organisms/compro-category/ComproCategoryPageLink'

export const Index: NextPage = () => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <ProblemCreate />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
