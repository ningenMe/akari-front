import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { CustomLinkCard } from 'components/organisms/CustomCard'
import styles from './ComproCategory.module.scss'
import { ninaApiComproCategoryClient } from 'repository/NinaApiRepository'
import { GetCategoryResponse } from 'mami-interface/mami-generated-client/nina-api-grpc/compro_category_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { PathConst } from 'constants/Const'
import { ManageButton } from 'components/atoms/Button'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { Any, Message } from '@bufbuild/protobuf'

export const ComproCategory = () => {

  const [categoryList, setCategoryList] = useState < Category[]>([])

  const categoryGet = async () => {
    const categoryGetResponse = await miikoApiMiikoServiceClient.categoryGet({}) as CategoryGetResponse
    setCategoryList(categoryGetResponse.categoryList)
  }

  useEffect(() => {
    categoryGet()
  }, [])

  const cardList = categoryList.map((category) =>
    <CustomLinkCard href={PathConst.COMPRO_CATEGORY + '/' + category.categorySystemName} key={category.categoryId}>
      <h5 className={styles.title}>
        {category.categoryDisplayName}
      </h5>
    </CustomLinkCard>
  )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴 今は改装中...</Typography>

      <ManageButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} />

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
