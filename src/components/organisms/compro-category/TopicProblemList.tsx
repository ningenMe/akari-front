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
import { PathConst } from 'constants/Const'
import {
  CategoryNormalCard,
  PageTextCard,
  ProblemLinkCard,
  ProblemNormalCard,
  TagLinkCard,
  TopicNormalCard,
} from '../../atoms/compro-category/Card'
import { CategoryButton, ProblemButton, TopicButton } from '../../atoms/compro-category/Button'
import styles from './ComproCategoryPageLink.module.scss'

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
        <p key={it.referenceId}>
          ・<a href={it.url}>{it.referenceDisplayName}</a>
        </p>,
      )
  }

  return (
    <Container>
      <div className={styles.buttonGrid}>
        {isAuthorizedComproCategory ?
          <CategoryButton href={''} name='category edit' /> : <></>}
        {isAuthorizedComproCategory ?
          <TopicButton
            href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_MANAGE(category?.categorySystemName ?? '')}
            name='topic edit' /> : <></>}
      </div>
      <CategoryNormalCard
        categoryDisplayName={category?.categoryDisplayName ?? ''}
      />
      <TopicNormalCard>
        <h5> {topic?.topicDisplayName ?? ''} </h5>
      </TopicNormalCard>
      <PageTextCard>
        <p>{topic?.topicText}</p>
        <h6>{(topic?.referenceList ?? []).length > 0 ? 'Reference:' : ''}</h6>
        {getReferenceCardList(topic?.referenceList ?? [])}
      </PageTextCard>
      <TopicNormalCard>
        <>
          {getProblemCardList(topic?.problemList ?? [])}
        </>
      </TopicNormalCard>
    </Container>
  )
}
