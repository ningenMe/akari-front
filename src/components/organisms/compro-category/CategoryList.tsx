import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { CustomLinkCard, CustomNormalCard } from 'components/organisms/CustomCard'
import styles from './CategoryList.module.scss'
import { PathConst } from 'constants/Const'
import { ManageButton, TransitionButton } from 'components/atoms/Button'
import { miikoApiMiikoServiceClient } from '../../../repository/MiikoApiRepository'
import { Category, CategoryListGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'

export const CategoryList = (): JSX.Element => {

  const [categoryList, setCategoryList] = useState < Category[]>([])
  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)

  const categoryGet = async () => {
    const categoryGetResponse = await miikoApiMiikoServiceClient.categoryListGet({}) as CategoryListGetResponse
    setCategoryList(categoryGetResponse.categoryList)
  }

  useEffect(() => {
    kiwaApiUsersClient.usersGet({method: 'GET', withCredentials: true})
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })
    categoryGet()
  }, [])

  const cardList = categoryList.map((category) =>
    <CustomLinkCard href={PathConst.COMPRO_CATEGORY_CATEGORY_TOPIC_LIST(category.categorySystemName)} key={category.categoryId}>
      <h5 className={styles.title}>
        {category.categoryDisplayName}
      </h5>
      <div>topic: {category.topicSize} , problem: {category.problemSize}</div>
    </CustomLinkCard>
  )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ningenMeが解いた競技プログラミングの履歴 今は改装中...</Typography>
      <Typography variant='body2'>ジャンル分けの浅さはningenMeの競技プログラミングへの解像度の低さ...</Typography>

      {isAuthorizedComproCategory ? <ManageButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} /> : <></> }
      <TransitionButton href={PathConst.COMPRO_CATEGORY_CATEGORY_PROBLEM_LIST(0)} name='problem list'/>

      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
