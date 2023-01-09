import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { CustomLinkCard } from 'components/organisms/CustomCard'
import styles from './ComproCategory.module.scss'
import { ninaApiComproCategoryClient } from 'repository/NinaApiRepository'
import { GetCategoryResponse } from 'mami-interface/mami-generated-client/nina-api-grpc/compro_category_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { PathConst } from 'constants/Const'
import { ManageButton } from 'components/atoms/compro-category/Button'

export const ComproCategory = () => {

  const [categoryResponse, setCategoryResponse] = useState < GetCategoryResponse | undefined>()

  useEffect(() => {

    ninaApiComproCategoryClient.get(new Empty(), null)
      .then(res => setCategoryResponse(res))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const cardList = categoryResponse?.getCategorylistList().map((category) =>
    <CustomLinkCard href={PathConst.COMPRO_CATEGORY + '/' + category.getCategorysystemname()} key={category.getCategoryid()}>
      <h5 className={styles.title}>
        {category.getCategorydisplayname()}
      </h5>
    </CustomLinkCard>
  )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴</Typography>

      <ManageButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} />

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
