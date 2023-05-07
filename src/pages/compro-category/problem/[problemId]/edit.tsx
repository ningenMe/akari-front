import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { GetServerSideProps, NextPage } from 'next'
import { ProblemEdit } from 'components/organisms/compro-category/ProblemEdit'
import { ComproCategoryPageLink } from '../../../../components/organisms/compro-category/ComproCategoryPageLink'

type Props = {
  problemId: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const problemId = (typeof context.query.problemId === 'string') ? context.query.problemId : ''

  const props: Props = {
    problemId: problemId,
  }
  return { props }
}

export const Edit: NextPage<Props> = (props: Props) => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <ProblemEdit problemId={props.problemId} />
      <ComproCategoryFooter />
    </>
  )
}
export default Edit
