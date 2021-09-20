import { Container, Grid } from '@material-ui/core'
import { Blog, BlogType } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Title } from 'organisms/DiaryOrganism'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const blogTypes: BlogType[] = ['DIARY']
  const blogs: Blog[] = await getBlog(blogTypes)

  return {
    props: { blogs },
  }
}

export const Diaries = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Title date='' />
          </Grid>
          <Grid item xs={12}>
            <BlogList blogs={blogs} />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Diaries
