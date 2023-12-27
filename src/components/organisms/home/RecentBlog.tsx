import { useEffect, useState } from 'react'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'

export const RecentBlog = () => {

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
  const blogCardList = blogList.map(it => (
    <div key={it.getUrl()}> 
      {it.getBlogTitle()}
    </div>
  ));

  return (
    <>
      {blogCardList}
    </>
  )
}
