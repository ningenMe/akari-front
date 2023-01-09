import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from '../../components/organisms/Footer'
import { NingenmeNetHeader } from '../../components/organisms/Header'
import { System } from '../../components/organisms/system/System'

export const Index = () => {
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
