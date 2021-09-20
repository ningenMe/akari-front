import { Container } from '@material-ui/core'
import { ProblemCardList } from 'organisms/ProblemOrganism'
import { Footer, Header, HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'

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
