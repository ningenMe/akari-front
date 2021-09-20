import { Container } from '@material-ui/core'
import { Blog, BlogType, BlogTypeConst } from 'interfaces/Blog'
import { BlogTypeFilterList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const blogTypeList: BlogType[] = [BlogTypeConst.AMEBA, BlogTypeConst.HATENA, BlogTypeConst.QIITA, BlogTypeConst.DIARY]
  const blogList: Blog[] = await getBlog(blogTypeList)

  return {
    props: { blogList },
  }
}

export const Blogs = ({ blogList }: { blogList: Blog[] }) => {

  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <BlogTypeFilterList blogList={blogList} />
      </Container>
      <Footer />
    </>
  )
}

export default Blogs
