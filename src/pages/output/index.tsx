import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { OutputSearch } from 'components/organisms/output/OutputSearch'


export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='output - ' />
      <NingenmeNetHeader />
      <OutputSearch />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
