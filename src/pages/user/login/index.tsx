import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { UserLogin } from '../../../components/organisms/user/UserLogin'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='user/login - ' />
      <NingenmeNetHeader />
      <UserLogin />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
