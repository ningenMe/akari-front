import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from '../../components/organisms/Footer'
import { NingenmeNetHeader } from '../../components/organisms/Header'
import { Contribution } from '../../components/organisms/contribution/Contribution'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='contribution - ' />
      <NingenmeNetHeader />
      <Contribution />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
