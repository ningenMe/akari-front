import { HtmlHead } from 'components/organisms/HtmlHead'
import { Home } from '../../components/templates/Home'
import { NingenmeNetFooter } from '../../components/organisms/Footer'
import { NingenmeNetHeader } from '../../components/organisms/Header'
import { NextPage } from 'next'

export const Index: NextPage = () => {
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
