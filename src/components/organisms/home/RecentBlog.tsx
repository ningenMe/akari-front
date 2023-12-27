import { useEffect, useState } from 'react'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { Title } from 'components/atoms/Title'
import { OptionalHref } from 'components/atoms/OptionalHref'
import styles from './RecentBlog.module.scss'
import fontStyles from 'styles/Font.module.scss'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { PathConst } from 'constants/Const'

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
    [suzuApiBlogServiceClient])

  const blogCardList = blogList.map((blog, idx) => (
    <div key={idx} className={fontStyles.body}> 
      <span className={styles.date}>{blog.getDate()}</span>
      {': '}
      <OptionalHref body={blog.getBlogTitle()} href={blog.getUrl()} />
    </div>
  ));

  return (
    <>
      <Title title='Blog' />
      <CustomNormalCard>
        {blogCardList}
        {">"} <a href={PathConst.BLOG}> もっと見る </a>
      </CustomNormalCard>
    </>
  )
}
