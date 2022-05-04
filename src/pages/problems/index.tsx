import { Container } from '@material-ui/core'
import { ProblemCardList } from 'organisms/ProblemOrganism'
import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'

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
