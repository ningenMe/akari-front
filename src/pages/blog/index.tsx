import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { BlogSearch } from 'components/organisms/blog/BlogSearch'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='blog - ' />
      <NingenmeNetHeader />
      <BlogSearch />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
