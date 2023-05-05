import { Container, FormControl, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './UserLogin.module.scss'
import { LoginButton } from '../../atoms/Button'
import { kiwaApiLoginClient, kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { LoginPostRequest, UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import fontStyles from '../../../styles/Font.module.scss'
import { CustomNormalCard } from '../CustomCard'
import { Title } from '../../atoms/Title'

export const UserLogin = (): JSX.Element => {

  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = useState < UsersMeGetResponse | undefined > (undefined)

  const loginClick = () => {
    const request: LoginPostRequest = {
      userId: userId,
      password: password
    }
    kiwaApiLoginClient
      .loginPost(request, {method: 'POST', withCredentials: true})
      .catch((err: Error) => {
        console.log(err)
      })

  }

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

  useEffect(() => {
    kiwaApiUsersClient.usersGet({method: 'GET', withCredentials: true})
      .then((res: { data: UsersMeGetResponse }) => setUser(res.data))
      .catch((err: Error) => {
        console.log(err)
        setUser(undefined)
      })
  }, [])

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Title title='ログイン' />

      <FormControl fullWidth className={styles.wrapper}>
        <TextField
          label='userId'
          onChange={(event) => {setUserId(event.target.value)}}
          value={userId}
          className={styles.textfield}
        />
        <TextField
          label='password'
          onChange={(event) => {setPassword(event.target.value)}}
          value={password}
          className={styles.textfield}
        />
      </FormControl>
      <div className={styles.buttongrid}>
        <LoginButton onClick={loginClick} />
      </div>

      <div className={styles.grid}>
        <CustomNormalCard>
          {user ? loggedIn(user) : notLoggedIn()}
        </CustomNormalCard>
      </div>

    </Container>
  )
}
