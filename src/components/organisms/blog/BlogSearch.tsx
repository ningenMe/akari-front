import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { Container, List } from '@mui/material'
import { BlogChip } from 'components/atoms/blog/BlogChip'

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

  const blogCardList = blogList.map((blog) => (
    <BlogChip blog={blog} />
  ));

  return (
    <Container>
      <List>
        {blogCardList}
      </List>
    </Container>      
  )
}
