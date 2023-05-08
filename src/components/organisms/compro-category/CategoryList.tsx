import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './CategoryList.module.scss'
import { PathConst } from 'constants/Const'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryListGetRequest, CategoryListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CategoryLinkCard, PageTextCard } from '../../atoms/compro-category/Card'

export const CategoryList = (): JSX.Element => {

  const [categoryList, setCategoryList] = useState<Category[]>([])

  const categoryGet = async () => {
    const request = new CategoryListGetRequest({ isRequiredTopic: false })
    const response = await miikoApiMiikoServiceClient.categoryListGet(request) as CategoryListGetResponse
    setCategoryList(response.categoryList)
  }

  useEffect(() => {
    categoryGet()
  }, [])

  const cardList = categoryList.map((category) =>
    <CategoryLinkCard
      key={category.categoryId}
      href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_LIST(category.categorySystemName)}
      categoryDisplayName={category.categoryDisplayName}
    >
      {/*TODO 数字の見せ方は要検討*/}
      <div>topic: {category.topicSize}</div>
      <div>problem: {category.problemSize}</div>
    </CategoryLinkCard>,
  )

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴。日々改装中。UI色々直したい。</Typography>
        <Typography variant='body2'>ジャンル分けの浅さはningenMeの競技プログラミングへの解像度の低さ...</Typography>
      </PageTextCard>

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
