import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { GetServerSideProps, NextPage } from 'next'
import { ProblemList } from '../../../components/organisms/compro-category/ProblemList'
import { ProblemCreate } from '../../../components/organisms/compro-category/ProblemCreate'

export const Index: NextPage = () => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <ProblemCreate />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
