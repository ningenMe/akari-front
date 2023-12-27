import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { System } from 'components/organisms/system/System'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='system - ' />
      <NingenmeNetHeader />
      <System />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
