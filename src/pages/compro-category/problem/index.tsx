import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { GetServerSideProps, NextPage } from 'next'
import { ProblemList } from '../../../components/organisms/compro-category/ProblemList'

type Props = {
  page: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const props: Props = {
    page: parseInt(context.query.page as string, 10),
  }
  return { props }
}

export const Index: NextPage<Props> = (props: Props) => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <ProblemList page={props.page} />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
