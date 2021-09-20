import { Container } from '@material-ui/core'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Blog, BlogType } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'

export const getServerSideProps = async () => {

  const blogTypeList: BlogType[] = ['HATENA', 'QIITA']
  const blogList: Blog[] = await getBlog(blogTypeList)

  return {
    props: { blogList },
  }
}

export const Articles = ({ blogList }: { blogList: Blog[] }) => {

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

export default Articles
