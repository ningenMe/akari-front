import { Container } from '@material-ui/core'
import { Blog, BlogType, BlogTypeConst } from 'interfaces/Blog'
import { BlogTypeFilterList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Footer, Header, HtmlHead, CustomHtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { ImageConst } from 'constants/ImageConst'

export const getServerSideProps = async () => {

  const blogTypeList: BlogType[] = [BlogTypeConst.AMEBA, BlogTypeConst.HATENA, BlogTypeConst.QIITA, BlogTypeConst.DIARY]
  const blogList: Blog[] = await getBlog(blogTypeList)

  return {
    props: { blogList },
  }
}

export const BlogsGraphs = ({ blogList }: { blogList: Blog[] }) => {

  return (
    <>
      <CustomHtmlHead title='blogの投稿数グラフ' image={ImageConst.NINGENME_NET} />
      <Header />
      <Container>
      </Container>
      <Footer />
    </>
  )
}

export default BlogsGraphs
