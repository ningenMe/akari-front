import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import Image from 'next/image'
import Chip from '@mui/material/Chip/Chip'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogSearch.module.scss'
import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const BlogSearch = (): JSX.Element => {

  const [blogList, setBlogList] = useState<Blog[]>([])

  useEffect(
    () => {
      suzuApiBlogServiceClient.getBlog(new Empty(), null)
      .then(res => {
        setBlogList(res.getBlogListList())
      })
      .catch(err => console.log(err))
    },
    [suzuApiBlogServiceClient])

  const blogIconPath = (blogType: string): string => {
    if (blogType === "HATENA") return 'hatena.svg'
    if (blogType === "QIITA") return 'qiita.png'
    if (blogType === "SIZU") return 'sizu.png'
    if (blogType === "ZENN") return 'zenn.svg'
    if (blogType === "AMEBA") return 'a.png'
    return 'ningenme.png'
  }

  const blogCardList = blogList.map((blog, idx) => (
    <ListItem key={idx} disablePadding className={fontStyles.body}>
        <Chip 
          label={blog.getDate()} 
          variant="outlined" 
          size="small" 
          className={styles.date} 
        />
        <Chip 
          icon={<Image src={"/" + blogIconPath(blog.getBlogType())} alt="image" width="20" height="20" />}
          label={blog.getBlogType()} 
          variant="outlined" 
          size="small" 
          className={styles.type} 
        />        
        <ListItemText>
          <a href={blog.getUrl()} className={styles.title}>{blog.getBlogTitle()}</a>
        </ListItemText>
    </ListItem>
  ));

  return (
    <Container>
      <List>
        {blogCardList}
      </List>
    </Container>      
  )
}
