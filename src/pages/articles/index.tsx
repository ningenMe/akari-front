import { Container } from '@material-ui/core'
import { Blog, BlogType } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'

export const getServerSideProps = async () => {

  const blogTypes: BlogType[] = ['HATENA', 'QIITA']
  const blogs: Blog[] = await getBlog(blogTypes)

  return {
    props: { blogs },
  }
}

export const Articles = ({ blogs }: { blogs: Blog[] }) => {

  return (
    <Container>
      <BlogList blogs={blogs} />
    </Container>
  )
}

export default Articles
