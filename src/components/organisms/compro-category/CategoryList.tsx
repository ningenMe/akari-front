import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './CategoryList.module.scss'
import { PathConst } from 'constants/Const'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryListGetRequest, CategoryListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CategoryCard } from '../../atoms/compro-category/Card'

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
    <CategoryCard
      key={category.categoryId}
      href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_LIST(category.categorySystemName)}
      categoryDisplayName={category.categoryDisplayName}
      topicSize={category.topicSize}
      problemSize={category.problemSize}
    />,
  )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴。日々改装中。UI色々直したい。</Typography>
      <Typography variant='body2'>ジャンル分けの浅さはningenMeの競技プログラミングへの解像度の低さ...</Typography>

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
