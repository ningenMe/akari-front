import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PathConst } from 'constants/Const'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryListGetRequest, CategoryListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { PageTextCard, TopicLinkCard } from '../../atoms/compro-category/Card'

export const TopicList = (): JSX.Element => {

  const [categoryList, setCategoryList] = useState<Category[]>([])

  const categoryGet = async () => {
    const request = new CategoryListGetRequest({ isRequiredTopic: true })
    const response = await miikoApiMiikoServiceClient.categoryListGet(request) as CategoryListGetResponse
    setCategoryList(response.categoryList)
  }

  useEffect(() => {
    categoryGet()
  }, [])

  const cardList = categoryList
    .map((category) => {
      return category.topicList.map((topic) => {
        return { category, topic }
      })
    })
    .flatMap(it => it)
    .map((it) =>
      <>
        {/*<CategoryLinkCard*/}
        {/*  key={it.category.categoryId}*/}
        {/*  href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_LIST(it.category.categorySystemName)}*/}
        {/*  categoryDisplayName={it.category.categoryDisplayName}*/}
        {/*>*/}
        {/*</CategoryLinkCard>*/}
        <TopicLinkCard href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topic.topicId)}
                       topicDisplayName={it.topic.topicDisplayName} />
      </>,
    )

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>ひどいUIだけど一旦これで事足りるので許容......。topic全体をgrepするためのページ</Typography>
      </PageTextCard>
      {cardList}
    </Container>
  )
}
