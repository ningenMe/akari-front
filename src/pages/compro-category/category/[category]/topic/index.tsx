import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { TopicList } from 'components/organisms/compro-category/TopicList'
import { GetServerSideProps } from 'next'

type Props = {
  categorySystemName: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  const categorySystemName = (typeof category === 'string') ? category : ''
  const props: Props = {
    categorySystemName: categorySystemName
  }
  return { props }
}

export const Manage = (props: Props) => {

  return (
    <>
      <HtmlHead title={'compro-category ' + props.categorySystemName + ' - '} />
      <ComproCategoryHeader />
      <TopicList categorySystemName={props.categorySystemName} />
      <ComproCategoryFooter />
    </>
  )
}
export default Manage
