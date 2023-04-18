import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { UserMe } from '../../../components/organisms/user/UserMe'

export const Index = () => {
  return (
    <>
      <HtmlHead title='user/me - ' />
      <NingenmeNetHeader />
      <UserMe />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
