import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { GetServerSideProps, NextPage } from 'next'
import { TopicEdit } from 'components/organisms/compro-category/TopicEdit'

type Props = {
  topicId: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const topicId = (typeof context.query.topicId === 'string') ? context.query.topicId : ''

  const props: Props = {
    topicId: topicId,
  }
  return { props }
}

export const Edit: NextPage<Props> = (props: Props) => {

  return (
    <>
      <HtmlHead title={'compro-category category: problem - '} />
      <ComproCategoryHeader />
      <TopicEdit topicId={props.topicId} />
      <ComproCategoryFooter />
    </>
  )
}
export default Edit
