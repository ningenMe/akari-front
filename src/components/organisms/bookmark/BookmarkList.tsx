import React, {useEffect, useState } from 'react'
import { BookmarkDirectory } from 'roman-api/client/src/generated'
import { Container, List, ListItem, ListItemText } from '@mui/material'
import { romanBookmarkApiClient } from 'repository/RomanApiRepository'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './BookmarkList.module.scss'

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

  const bookmarkCardList = bookmarkDirectoryList.map((bookmarkDirectory, idx) => (
    <CustomNormalCard key={idx}>
      <span className={styles.directoryTitle}>{bookmarkDirectory.title}</span>   

      {bookmarkDirectory.bookmarkList.map(bookmark => {
        return (
          <ListItem disablePadding className={styles.bookmarkItem} key={bookmark.url}>
            <ListItemText className={fontStyles.body}>
              <a href={bookmark.url} className={styles.bookmarkTitle}>{bookmark.title}</a>
            </ListItemText>
          </ListItem>
        );
      })}
    </CustomNormalCard>)
  );

  return (
    <Container>
      <SubTitle title={'favorite dev-bookmark'} />
      <CustomNormalCard>

      <p className={fontStyles.body}>
        自分用の開発途中に見た記事まとめ。
      </p>
      <p className={fontStyles.body}>
        自分用のまとめとして他の方の記事を引用させていただいています。このサイト自体に営利目的はないですが、もし気に障る場合はtwitter経由で連絡ください。
      </p>
      </CustomNormalCard>
      <List>
        {bookmarkCardList}
      </List>
    </Container>      
  )
}
