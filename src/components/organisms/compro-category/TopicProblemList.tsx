import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  Problem,
  ProblemListGetRequest,
  ProblemListGetRequest_SortType, ProblemListGetResponse, Tag, Topic, TopicGetRequest, TopicGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomLinkCard, CustomNormalCard } from 'components/organisms/CustomCard'
import styles from './ProblemList.module.scss'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { ManageButton, TagButton, TransitionButton } from 'components/atoms/Button'
import { PathConst } from 'constants/Const'

export const TopicProblemList = ({topicId} : {topicId: string}): JSX.Element => {

  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)
  const [category, setCategory] = useState <Category>()
  const [topic, setTopic] = useState <Topic>()

  const topicGet = async () => {
    const request = new TopicGetRequest({ topicId: topicId })
    const response = await miikoApiMiikoServiceClient.topicGet(request) as TopicGetResponse
    kiwaApiUsersClient.usersGet({method: 'GET', withCredentials: true})
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })

    setTopic(response.topic)
    setCategory(response.category)
  }

  useEffect(() => {
    topicGet()
  }, [])

  const getTagCardList = (tagList: Tag[]) => {
    return tagList
      .map((it) =>
        <TagButton name={it.topicDisplayName} key={it.topicId} />
      )
  }

  const cardList = topic?.problemList
    .sort((l,r) => l.estimation - r.estimation)
    .map((it) =>
      <>
        <CustomLinkCard href={it.url} key={it.problemId}>
          <div>{it.problemDisplayName}</div>
          {getTagCardList(it.tagList)}
        </CustomLinkCard>
        {isAuthorizedComproCategory ? <ManageButton href={PathConst.COMPRO_CATEGORY_PROBLEM_EDIT(it.problemId)} /> : <></> }
      </>
    )

  return (
    <Container>
      <Typography variant='body2'>{category?.categoryDisplayName}</Typography>
      <CustomNormalCard key={topic?.topicId}>
        <div>{topic?.topicDisplayName}</div>
        {cardList}
      </CustomNormalCard>

    </Container>
  )
}
