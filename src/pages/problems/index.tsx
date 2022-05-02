import { Container } from '@material-ui/core'
import { ProblemCardList } from 'organisms/ProblemOrganism'
import { Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'

export const Problems = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Container>
        <ProblemCardList />
      </Container>
      <Footer />
    </>
  )
}
export default Problems
