import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { UserLogin } from '../../../components/organisms/user/UserLogin'

export const Index = () => {
  return (
    <>
      <HtmlHead title='user/me - ' />
      <NingenmeNetHeader />
      <UserLogin />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
