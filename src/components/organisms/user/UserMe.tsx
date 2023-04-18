// @ts-ignore
import { Container } from '@mui/material'
import { Title } from '../../atoms/Title'
import React, { useEffect, useState } from 'react'
import styles from './UserMe.module.scss'
import { CustomNormalCard } from '../CustomCard'
import fontStyles from '../../../styles/Font.module.scss'
import { kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'

export const UserMe = () => {

  // eslint-disable-next-line no-self-compare
  const [user, setUser] = useState < UsersMeGetResponse | undefined > (undefined)

  useEffect(() => {
    kiwaApiUsersClient.usersGet({method: 'GET', withCredentials: true})
      .then((res: { data: any }) => setUser(res.data))
      .catch((err: any) => {
        console.log(err)
        setUser(undefined)
      })
  }, [])

  const loggedIn = (loginUser: UsersMeGetResponse) => {
    return (
      <div>
        <p className={fontStyles.body}>ユーザー名: {loginUser.userId}</p>
        <p className={fontStyles.body}>compro-category認可: {loginUser.authority.comproCategory ? 'あり' : 'なし'}</p>
      </div>
    )
  }

  const notLoggedIn = () => {
    return (
      <div>
        <p className={fontStyles.body}>未ログインです</p>
      </div>
    )
  }

  return (
    <Container>
      <Title title='マイページ' />
      <div className={styles.grid}>
        <CustomNormalCard>
          {user ? loggedIn(user) : notLoggedIn()}
        </CustomNormalCard>
      </div>
    </Container>
  )
}
