import { Container, Grid } from '@material-ui/core'
import { Activity, Creation, History, Profile } from 'organisms/HomeOrganism'
import { ApplicationMeta } from 'interfaces/ApplicationMeta'
import { getApplicationMeta } from 'repository/ApplicationMetaRepository'
import { LastUpdate } from 'molecules/LastUpdate'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

export const getServerSideProps = async () => {

  const applicationMeta: ApplicationMeta = await getApplicationMeta('net-front')

  return {
    props: { applicationMeta },
  }
}

export const Home = ({ applicationMeta }: { applicationMeta: ApplicationMeta }) => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} />
        </Grid>
        <LastUpdate applicationMeta={applicationMeta} />
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
