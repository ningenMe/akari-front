import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { OptionalHref } from 'components/atoms/OptionalHref'

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

  const blogCardList = blogList.map((blog, idx) => (
    <div key={idx}> 
      <span>{blog.getDate()}</span>
      {': '}
      <OptionalHref body={blog.getBlogTitle()} href={blog.getUrl()} />
    </div>
  ));

  return (
    <>
      TODO cssを当てる
      {blogCardList}
    </>
  )
}
