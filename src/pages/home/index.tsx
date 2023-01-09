import { HtmlHead } from 'components/organisms/HtmlHead'
import { Home } from '../../components/templates/Home'
import { NingenmeNetFooter } from '../../components/organisms/Footer'
import { NingenmeNetHeader } from '../../components/organisms/Header'

export const Index = () => {
  return (
    <>
      <HtmlHead title='' />
      <NingenmeNetHeader />
      <Home />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
