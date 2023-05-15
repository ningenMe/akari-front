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
import { PathConst } from '../../../constants/Const'
import {
  CategoryNormalCard,
  PageTextCard,
  ProblemLinkCard,
  TopicLinkCard,
  TopicNormalCard,
} from '../../atoms/compro-category/Card'
import styles from './ComproCategoryPageLink.module.scss'
import { CategoryButton, ProblemButton, TopicButton } from '../../atoms/compro-category/Button'

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
      .map(it => {
        return (
          <div key={it.problemId}>
            <ProblemLinkCard href={it.url} problemDisplayName={it.problemDisplayName} key={it.problemId} />
            {isAuthorizedComproCategory ?
              <ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_EDIT(it.problemId)} name={'edit'} /> : <></>}
          </div>

        )
      })
  }

  const getReferenceCardList = (topicList: Topic[]) => {
    return topicList
      .map((it) => it.referenceList)
      .flatMap(it => it)
      .map((it) =>
        <p key={it.referenceId}>
          ・<a href={it.url} rel='noreferrer noopener' target='_blank'>{it.referenceDisplayName}</a>
        </p>,
      )
  }

  const cardList = topicList
    .sort((l, r) => l.topicOrder - r.topicOrder)
    .map((it) =>
      <TopicNormalCard key={it.topicId}>
        <TopicLinkCard href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)}
                       topicDisplayName={it.topicDisplayName} />
        {/*TODO 右寄せ*/}
        {isAuthorizedComproCategory ?
          <TopicButton href={PathConst.COMPRO_CATEGORY_TOPIC_EDIT(it.topicId)} name='edit' /> : <></>}
        {getProblemCardList(it.problemList)}
      </TopicNormalCard>,
    )

  return (
    <Container>
      <div className={styles.buttonGrid}>
        {isAuthorizedComproCategory ?
          <CategoryButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} name='category edit' /> : <></>}
      </div>

      <CategoryNormalCard
        categoryDisplayName={category?.categoryDisplayName ?? ''}
      />
      <PageTextCard>
        <h6>{'Reference:'}</h6>
        {getReferenceCardList(topicList)}
      </PageTextCard>
      {cardList}

    </Container>
  )
}
