import { Container } from '@material-ui/core'
import { Activity, History} from 'organisms/HomeOrganism'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Profile } from '../../components/organisms/home/Profile'
import { Creation } from '../../components/organisms/home/Creation'

export const Home = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
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
