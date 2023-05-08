import { HtmlHead } from 'components/organisms/HtmlHead'
import { ComproCategoryFooter } from 'components/organisms/Footer'
import { ComproCategoryHeader } from 'components/organisms/Header'
import { CategoryTopicList } from 'components/organisms/compro-category/CategoryTopicList'
import { GetServerSideProps, NextPage } from 'next'
import { ComproCategoryPageLink } from 'components/organisms/compro-category/ComproCategoryPageLink'

type Props = {
  categorySystemName: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  const categorySystemName = (typeof category === 'string') ? category : ''
  const props: Props = {
    categorySystemName: categorySystemName,
  }
  return { props }
}

export const Index: NextPage<Props> = (props: Props) => {

  return (
    <>
      <HtmlHead title={'compro-category category:' + props.categorySystemName + ' topic - '} />
      <ComproCategoryHeader />
      <ComproCategoryPageLink />
      <CategoryTopicList categorySystemName={props.categorySystemName} />
      <ComproCategoryFooter />
    </>
  )
}
export default Index
