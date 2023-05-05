import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { ProblemList } from '../../../components/organisms/compro-category/ProblemList'

export const Index: NextPage = () => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <ProblemList  />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
