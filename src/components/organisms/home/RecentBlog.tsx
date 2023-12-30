import { useEffect, useState } from 'react'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { SubTitle } from 'components/atoms/Title'
import { PathConst } from 'constants/Const'
import { List } from '@mui/material'
import { getblogChip } from 'components/atoms/blog/BlogChip'

export const RecentBlog = () => {

  const [blogList, setBlogList] = useState<Blog[]>([])

  useEffect(
    () => {
      suzuApiBlogServiceClient.getBlog(new Empty(), null)
      .then(res => {
        setBlogList(res.getBlogListList().slice(0, 5))
      })
      .catch(err => console.log(err))
    },
    [suzuApiBlogServiceClient]
  )

  const blogCardList = blogList.map((blog, idx) => (
    getblogChip(blog, idx)
  ));

  return (
    <>
      <SubTitle title={'recent blog'}></SubTitle>
        <List>
          {blogCardList}
        </List>
        {">"} <a href={PathConst.BLOG}> もっと見る </a>
    </>
  )
}
