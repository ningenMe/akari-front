import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import { Category, Problem, Topic, TopicListGetRequest, TopicListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomLinkCard, CustomNormalCard } from 'components/organisms/CustomCard'

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
    return problemList
      .sort((l,r) => l.estimation - r.estimation)
      .map((it) =>
      <CustomLinkCard href={it.url} key={it.problemId}>
        <div>{it.problemDisplayName}</div>
      </CustomLinkCard>
    )
  }

  const cardList = topicList
    .sort((l,r) => l.topicOrder-r.topicOrder)
    .map((it) =>
    <CustomNormalCard key={it.topicId}>
      <div>{it.topicDisplayName}</div>
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
