import { Container } from '@mui/material'
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
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { TransitionButton } from 'components/atoms/Button'
import { PathConst } from 'constants/Const'
import {
  PageTextCard,
  ProblemLinkCard,
  ProblemNormalCard,
  TagLinkCard,
  TopicLinkCard,
  TopicNormalCard,
} from '../../atoms/compro-category/Card'
import { ProblemButton, TopicButton } from '../../atoms/compro-category/Button'

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
        <TagLinkCard
          href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)}
          topicDisplayName={it.topicDisplayName}
          key={it.topicId} />,
      )
  }

  const getProblemCardList = (problemList: Problem[]) => {
    return problemList
      .sort((l, r) => l.estimation - r.estimation)
      .map((it) => {
          return (
            <ProblemNormalCard key={it.problemId}>
              <ProblemLinkCard href={it.url} problemDisplayName={it.problemDisplayName} key={it.problemId} />
              {isAuthorizedComproCategory ?
                <ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_EDIT(it.problemId)} name={'edit'} /> : <></>}
              <div>
                {getTagCardList(it.tagList)}
              </div>
            </ProblemNormalCard>)
        },
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
        {topic?.topicText}
        {getReferenceCardList(topic?.referenceList ?? [])}
      </PageTextCard>
      <TopicNormalCard>
        <>
          <TopicLinkCard href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(topic?.topicId ?? '')}
                         topicDisplayName={topic?.topicDisplayName ?? ''} />
          {/*TODO 右寄せ*/}
          {isAuthorizedComproCategory ?
            <TopicButton href={PathConst.COMPRO_CATEGORY_TOPIC_EDIT(topic?.topicId ?? '')} name='edit' /> : <></>}
          {getProblemCardList(topic?.problemList ?? [])}
        </>
      </TopicNormalCard>
    </Container>
  )
}
