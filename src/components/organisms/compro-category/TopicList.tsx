import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, Problem, Topic, TopicListGetRequest, TopicListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomNormalCard } from '../CustomCard'

export const TopicList = ({categorySystemName} : {categorySystemName: string}) => {

  const [category, setCategory] = useState < Category | undefined>()
  const [topicList, setTopicList] = useState <Topic[]>([])

  const topicListGet = async () => {
    const topicListGetRequest = new TopicListGetRequest({categorySystemName: categorySystemName})
    const topicListGetResponse = await miikoApiMiikoServiceClient.topicListGet(topicListGetRequest) as TopicListGetResponse
    setCategory(topicListGetResponse.category)
    setTopicList(topicListGetResponse.topicList?? [])
  }

  useEffect(() => {
    topicListGet()
  }, [])

  const getProblemCardList = (problemList: Problem[]) => {
    return problemList.map((it) =>
      <CustomNormalCard key={it.problemId}>
        <div>{"displayName: " + it.problemDisplayName}</div>
        <div>{"url: " + it.url}</div>
      </CustomNormalCard>
    )
  }

  const cardList = topicList.map((it) =>
    <CustomNormalCard key={it.topicId}>
      <div>{"displayName: " + it.topicDisplayName}</div>
      <div>{"order: " + it.topicOrder}</div>
      {getProblemCardList(it.problemList)}
    </CustomNormalCard>
  )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>{category?.categoryDisplayName}</Typography>
      {cardList}

    </Container>
  )
}
