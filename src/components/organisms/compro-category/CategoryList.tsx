import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './CategoryList.module.scss'
import { PathConst } from 'constants/Const'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import {
  Category,
  CategoryListGetRequest,
  CategoryListGetResponse,
  StatisticsGetRequest,
  StatisticsGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CategoryLinkCard, PageTextCard } from '../../atoms/compro-category/Card'

export const CategoryList = (): JSX.Element => {

  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [statistics, setStatistics] = useState<StatisticsGetResponse>()

  const categoryGet = async () => {
    const request = new CategoryListGetRequest({ isRequiredTopic: true })
    const response = await miikoApiMiikoServiceClient.categoryListGet(request) as CategoryListGetResponse
    setCategoryList(response.categoryList)
  }

  const statisticsGet = async () => {
    const response = await miikoApiMiikoServiceClient.statisticsGet(new StatisticsGetRequest()) as StatisticsGetResponse
    setStatistics(response)
  }

  useEffect(() => {
    categoryGet()
    statisticsGet()
  }, [])

  const cardList = categoryList.map((category) =>
    <CategoryLinkCard
      key={category.categoryId}
      href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_LIST(category.categorySystemName)}
      categoryDisplayName={category.categoryDisplayName}
    >
      {/*TODO 数字の見せ方は要検討*/}
      <div>topic: {category.topicList.length}</div>
    </CategoryLinkCard>,
  )

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴。</Typography>
        <Typography variant='body2'>ジャンル分けの浅さはningenMeの競技プログラミングへの解像度の低さ...</Typography>
        <Typography variant='body2'>
          topic: {statistics?.topicSize}, problem: {statistics?.problemSize}, tag: {statistics?.tagSize},
          reference: {statistics?.referenceSize}
        </Typography>
        <Typography variant='body2'> last
          update: {
            [
              statistics?.lastUpdatedCategoryTimestamp,
              statistics?.lastUpdatedTopicTimestamp,
              statistics?.lastUpdatedProblemTimestamp,
              statistics?.lastUpdatedTagTimestamp,
              statistics?.lastUpdatedReferenceTimestamp,
            ].map(it => it?.toDate())
              .sort((l, r) => ((r?.getTime() ?? 0) - (l?.getTime() ?? 0)))
              .find(() => true)
              ?.toLocaleString()
          } </Typography>
      </PageTextCard>

      <div className={styles.grid}>
        {cardList}
      </div>

      <PageTextCard>
        <Typography variant='body2'>
          自分用のまとめとして他の方の記事を引用させていただいています。このサイト自体に営利目的はないですが、もし気に障る場合はtwitter経由で連絡ください。
        </Typography>
      </PageTextCard>
    </Container>
  )
}
