import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  Problem,
  Topic,
  TopicListGetRequest,
  TopicListGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { TransitionButton } from '../../atoms/Button'
import { PathConst } from '../../../constants/Const'
import { CategoryNormalCard, TopicNormalCard } from '../../atoms/compro-category/Card'
import styles from './ComproCategoryPageLink.module.scss'
import { CategoryButton, TopicButton } from '../../atoms/compro-category/Button'

export const CategoryTopicList = ({ categorySystemName }: { categorySystemName: string }): JSX.Element => {

  const [category, setCategory] = useState<Category | undefined>()
  const [topicList, setTopicList] = useState<Topic[]>([])
  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)

  const topicListGet = async () => {
    const topicListGetRequest = new TopicListGetRequest({ categorySystemName: categorySystemName })
    const topicListGetResponse = await miikoApiMiikoServiceClient.topicListGet(topicListGetRequest) as TopicListGetResponse
    kiwaApiUsersClient.usersGet({ method: 'GET', withCredentials: true })
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })

    setCategory(topicListGetResponse.category)
    setTopicList(topicListGetResponse.topicList ?? [])
  }

  useEffect(() => {
    topicListGet()
  }, [])

  const getProblemCardList = (problemList: Problem[]) => {
    return problemList
      .sort((l, r) => l.estimation - r.estimation)
      .map((it) =>
        <TransitionButton href={it.url} name={it.problemDisplayName} key={it.problemId} />,
      )
  }

  const cardList = topicList
    .sort((l, r) => l.topicOrder - r.topicOrder)
    .map((it) =>
        <TopicNormalCard topicDisplayName={it.topicDisplayName} key={it.topicId}>
          <TopicButton href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)} name='detail' />
          {getProblemCardList(it.problemList)}
        </TopicNormalCard>
      ,
    )

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
      {cardList}

    </Container>
  )
}
