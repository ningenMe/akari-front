import { Container, Grid } from '@material-ui/core'
import { Activity, Creation, History, Profile } from 'organisms/HomeOrganism'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const Home = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} />
        </Grid>
        <Profile />
        <Creation />
        <Activity />
        <History />
      </Container>
      <Footer />
    </>
  )
}
export default Home
