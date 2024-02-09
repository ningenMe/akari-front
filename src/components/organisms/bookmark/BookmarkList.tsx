import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { BookmarkDirectory } from 'roman-api/client/src/generated'
import { Container, List } from '@mui/material'
import { BlogChip } from 'components/atoms/blog/BlogChip'
import { romanBookmarkApiClient } from 'repository/RomanApiRepository'

export const BookmarkList = (): JSX.Element => {

  const [bookmarkDirectoryList, setBookmarkDirectoryList] = useState<Array<BookmarkDirectory>>([]);

  useEffect(
    () => {
      romanBookmarkApiClient.bookmarksGet()
      .then(res => {
        setBookmarkDirectoryList(res.data.bookmarkDirectoryList)
      })
      .catch(err => console.log(err))
    },
    [romanBookmarkApiClient])

  const bookmarkCardList = bookmarkDirectoryList.map((it, idx) => (<div>{it.title}</div>));

  return (
    <Container>
      <List>
        {bookmarkCardList}
      </List>
    </Container>      
  )
}
