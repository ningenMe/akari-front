import { useEffect, useState } from 'react'
import { Blog } from '../../../interfaces/Blog'
import { ninaApiBlogClient } from '../../../repository/NinaApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import styles from './RecentBlog.module.scss'
import ForwardIcon from '@mui/icons-material/Forward'

export const RecentBlog = () => {

  const [blog, setBlog] = useState<Blog | undefined>()
  useEffect(
    () => {
      const stream = ninaApiBlogClient.get(new Empty(), undefined);
      stream.on("data", response => {
        const tmp = response.getBlog()
        console.log(tmp)
        setBlog({
          url: tmp?.getUrl() ?? '',
          type: tmp?.getType() ?? '',
          date: tmp?.getDate() ?? '',
          title: tmp?.getTitle() ?? '',
          liked: 0
        })
      })
    },
    [ninaApiBlogClient])

  return (
    <>
      {blog?
        <div className={styles.wrapper}>
          <span className={styles.recentBlogTitle}>
            {'Recent Article'}
            <ForwardIcon />
          </span>
          <span className={styles.recentBlogBody}>
            {blog?.date} : {blog?.title}
            <a href={blog?.url} className={styles.href} />
          </span>
        </div>
        :
        <>
        </>
      }
    </>
  )
}
