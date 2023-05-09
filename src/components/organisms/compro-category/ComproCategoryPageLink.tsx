import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PathConst } from 'constants/Const'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { CategoryButton, ProblemButton, TopicButton } from '../../atoms/compro-category/Button'
import styles from './ComproCategoryPageLink.module.scss'

export const ComproCategoryPageLink = (): JSX.Element => {

  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)

  useEffect(() => {
    kiwaApiUsersClient.usersGet({ method: 'GET', withCredentials: true })
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <div className={styles.buttonGrid}>
        <CategoryButton href={PathConst.COMPRO_CATEGORY_CATEGORY_LIST} name='category list' />
        <ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(0)} name='problem list' />
        {isAuthorizedComproCategory ?
          <CategoryButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} name='category create' /> : <></>}
        {isAuthorizedComproCategory ?
          <CategoryButton href={PathConst.COMPRO_CATEGORY_CATEGORY_MANAGE} name='category edit' /> : <></>}
        {isAuthorizedComproCategory ?
          <TopicButton href={PathConst.COMPRO_CATEGORY_TOPIC_CREATE} name='topic create' /> : <></>}
        {isAuthorizedComproCategory ?
          <ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_CREATE} name='problem create' /> : <></>}
      </div>
    </Container>
  )
}
