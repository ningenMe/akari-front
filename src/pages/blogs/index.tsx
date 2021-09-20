import { Container } from '@material-ui/core'
import { Blog, BlogType } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const blogTypes: BlogType[] = ['AMEBA']
  const blogs: Blog[] = await getBlog(blogTypes)

  return {
    props: { blogs },
  }
}

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {

  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <BlogList blogs={blogs} />
      </Container>
      <Footer />
    </>
  )
}

export default Blogs
