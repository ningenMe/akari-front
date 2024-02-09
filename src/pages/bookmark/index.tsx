import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { BookmarkList } from 'components/organisms/bookmark/BookmarkList'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='blog - ' />
      <NingenmeNetHeader />
      <BookmarkList />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
