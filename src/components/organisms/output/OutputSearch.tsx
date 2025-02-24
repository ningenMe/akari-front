import React, {useEffect, useState } from 'react'
import { suzuApiBlogServiceClient } from 'repository/SuzuApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import { Checkbox, Container, FormControlLabel, FormGroup, List } from '@mui/material'
import { BlogChip, BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'
import { Output } from 'interfaces/Output'
import { OutputChip } from 'components/atoms/output/OutputChip'
import { TASK_LIST } from 'constants/taskList'
import { ACTIVITY_LIST } from 'constants/activityList'

export const OutputSearch = (): JSX.Element => {

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

  const blogOutputList: Output[] = blogList.map((blog) => {
    return {
      date: blog.getDate(),
      title: blog.getBlogTitle(),
      href: blog.getUrl(),
      type: 'blog'
    }
  });
  const taskOutputList: Output[] = TASK_LIST.map((task) => {
    return {
      date: task.date,
      title: task.title,
      href: task.href,
      type: 'task'
    }
  })
  const activityTaskOutputList: Output[] = ACTIVITY_LIST.map((activity) => {
    return {
      date: activity.year.toString(),
      title: activity.body,
      href: activity.href,
      type: 'activity'
    }
  })

  const outputList = [...blogOutputList,...taskOutputList,...activityTaskOutputList].sort((l, r) => r.date.localeCompare(l.date))

  const outputChipList = outputList.map((output, idx) => (
    <OutputChip output={output} key={idx}/>
  ));

  return (
    <Container>
      <List>
        {outputChipList}
      </List>
    </Container>      
  )
}
