import { Container } from '@material-ui/core'
import { Blog, BlogType } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const blogTypeList: BlogType[] = ['AMEBA']
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
        <BlogList blogList={blogList} />
      </Container>
      <Footer />
    </>
  )
}

export default Blogs
