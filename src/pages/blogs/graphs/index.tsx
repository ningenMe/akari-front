import { Container } from '@material-ui/core'
import { getBlogPostedCount } from 'repository/BlogRepository'
import { Footer, Header, CustomHtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { ImageConst } from 'constants/ImageConst'
import { BlogPostedCount } from '../../../interfaces/BlogPostedCount'
import { BlogPostedGraph } from '../../../organisms/BlogOrganism'

export const getServerSideProps = async () => {

  const blogPostedCountList: BlogPostedCount[] = await getBlogPostedCount()

  return {
    props: { blogPostedCountList },
  }
}

export const BlogsGraphs = ({ blogPostedCountList }: { blogPostedCountList: BlogPostedCount[] }) => {

  return (
    <>
      <CustomHtmlHead title='blogの投稿数グラフ' image={ImageConst.NINGENME_NET} />
      <Header />
      <Container>
        <BlogPostedGraph blogPostedCountList={blogPostedCountList} />
      </Container>
      <Footer />
    </>
  )
}

export default BlogsGraphs
