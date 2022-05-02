import { Container, Grid } from '@material-ui/core'
import { Title } from 'organisms/DiaryOrganism'
import { Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'

export const Diaries = () => {
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
            {/*<BlogList blogList={blogList} />*/}
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
