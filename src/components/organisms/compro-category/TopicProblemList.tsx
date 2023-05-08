import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  Problem,
  Reference,
  Tag,
  Topic,
  TopicGetRequest,
  TopicGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomLinkCard } from 'components/organisms/CustomCard'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { ManageButton, TagViewButton, TransitionButton } from 'components/atoms/Button'
import { PathConst } from 'constants/Const'
import { PageTextCard } from '../../atoms/compro-category/Card'

export const TopicProblemList = ({ topicId }: { topicId: string }): JSX.Element => {

  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)
  const [category, setCategory] = useState<Category>()
  const [topic, setTopic] = useState<Topic>()

  const topicGet = async () => {
    const request = new TopicGetRequest({ topicId: topicId })
    const response = await miikoApiMiikoServiceClient.topicGet(request) as TopicGetResponse
    kiwaApiUsersClient.usersGet({ method: 'GET', withCredentials: true })
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
        <TagViewButton name={it.topicDisplayName} href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)}
                       key={it.topicId} />,
      )
  }

  const getProblemCardList = (problemList: Problem[]) => {
    return problemList
      .sort((l, r) => l.estimation - r.estimation)
      .map((it) =>
        <div key={it.problemId}>
          <TransitionButton href={it.url} name={it.problemDisplayName} />
          {getTagCardList(it.tagList)}
        </div>,
      )
  }
  const getReferenceCardList = (referenceList: Reference[]) => {
    return referenceList
      .map((it) =>
        <div key={it.referenceId}>
          <TransitionButton href={it.url} name={it.referenceDisplayName} />
        </div>,
      )
  }

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>このページはいずれ修正</Typography>
        <Typography variant='body2'>{category?.categoryDisplayName}</Typography>
      </PageTextCard>

      <CustomLinkCard href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(topic?.topicId ?? '')} key={topic?.topicId}>
        <div>{topic?.topicDisplayName}</div>
        <div>{topic?.topicText}</div>
      </CustomLinkCard>
      {getReferenceCardList(topic?.referenceList ?? [])}
      {getProblemCardList(topic?.problemList ?? [])}
      <ManageButton href={PathConst.COMPRO_CATEGORY_TOPIC_EDIT(topicId)} />
    </Container>
  )
}
