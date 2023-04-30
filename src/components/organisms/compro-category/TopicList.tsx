import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, Topic, TopicListGetRequest, TopicListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'

export const TopicList = ({categorySystemName} : {categorySystemName: string}) => {

  const [category, setCategory] = useState < Category | undefined>()
  const [topicList, setTopicList] = useState <Topic[]>()

  const topicListGet = async () => {
    const topicListGetRequest = new TopicListGetRequest({categorySystemName: categorySystemName})
    const topicListGetResponse = await miikoApiMiikoServiceClient.topicListGet(topicListGetRequest) as TopicListGetResponse
    setCategory(topicListGetResponse.category)
    setTopicList(topicListGetResponse.topicList?? [])
  }

  useEffect(() => {
    topicListGet()
  }, [])

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>{category?.categoryDisplayName}</Typography>


    </Container>
  )
}
