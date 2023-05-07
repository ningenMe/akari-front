import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { CategoryList } from 'components/organisms/compro-category/CategoryList'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { GetServerSideProps, NextPage } from 'next'
import { TopicProblemList } from '../../../../components/organisms/compro-category/TopicProblemList'

type Props = {
  topicId: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const topicId = (typeof context.query.topicId === 'string') ? context.query.topicId : ''

  const props: Props = {
    topicId: topicId
  }
  return { props }
}

export const Problem: NextPage<Props> = (props: Props) => {
  return (
    <>
      <HtmlHead title='compro-category topic - ' />
      <ComproCategoryHeader />
      <TopicProblemList topicId={props.topicId} />
      <ComproCategoryFooter />
    </>
  )
}
export default Problem
