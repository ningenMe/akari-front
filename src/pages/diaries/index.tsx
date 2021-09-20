import { Container, Grid } from '@material-ui/core'
import { Blog, BlogType, BlogTypeConst } from 'interfaces/Blog'
import { BlogList } from 'organisms/BlogOrganism'
import { getBlog } from 'repository/BlogRepository'
import { Title } from 'organisms/DiaryOrganism'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const blogTypeList: BlogType[] = [BlogTypeConst.DIARY]
  const blogList: Blog[] = await getBlog(blogTypeList)

  return {
    props: { blogList },
  }
}

export const Diaries = ({ blogList }: { blogList: Blog[] }) => {
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
            <BlogList blogList={blogList} />
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
