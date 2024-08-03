import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { Checkbox, Container, FormControlLabel, FormGroup, List } from '@mui/material'
import { BlogChip, BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'

const useBool = (): [boolean, () => void] => {
  const [value, setValue] = useState(true);
  return [value, () => setValue(value => !value)];
}

export const BlogSearch = (): JSX.Element => {

  const [blogList, setBlogList] = useState<Blog[]>([])
  const [isSizu, toggleSizu] = useBool()
  const [isZenn, toggleZenn] = useBool()
  const [isQiita, toggleQiita] = useBool()
  const [isHatena, toggleHatena] = useBool()
  const [isAmeba, toggleAmeba] = useBool()

  useEffect(
    () => {
      suzuApiBlogServiceClient.getBlog(new Empty(), null)
      .then(res => {
        setBlogList(res.getBlogListList())
      })
      .catch(err => console.log(err))
    },
    [suzuApiBlogServiceClient])

  const blogCardList = blogList.filter((blog) => {
    if (isSizu && blog.getBlogType() === 'SIZU') return true
    if (isZenn && blog.getBlogType() === 'ZENN') return true
    if (isQiita && blog.getBlogType() === 'QIITA') return true
    if (isHatena && blog.getBlogType() === 'HATENA') return true
    if (isAmeba && blog.getBlogType() === 'AMEBA') return true
    return false
  }).map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <Container>
      <Checkbox checked={isSizu} onChange={toggleSizu} /> <BlogNingenmeUrlChip blogType={'SIZU'} clickable={false} />
      <Checkbox checked={isZenn} onChange={toggleZenn} /> <BlogNingenmeUrlChip blogType={'ZENN'} clickable={false} />
      <Checkbox checked={isQiita} onChange={toggleQiita} /> <BlogNingenmeUrlChip blogType={'QIITA'} clickable={false} />
      <Checkbox checked={isHatena} onChange={toggleHatena} /> <BlogNingenmeUrlChip blogType={'HATENA'} clickable={false} />
      <Checkbox checked={isAmeba} onChange={toggleAmeba} /> <BlogNingenmeUrlChip blogType={'AMEBA'} clickable={false} />

      <List>
        {blogCardList}
      </List>
    </Container>      
  )
}
