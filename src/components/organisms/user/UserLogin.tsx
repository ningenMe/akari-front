import { Container, FormControl, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './UserLogin.module.scss'
import { LoginButton } from '../../atoms/Button'
import { kiwaApiLoginClient } from '../../../repository/KiwaApiRepository'
import { LoginPostRequest } from 'kiwa-api/typescript-axios-client/api'

export const UserLogin = () => {

  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginClick = () => {
    const request: LoginPostRequest = {
      userId: userId,
      password: password
    }
    kiwaApiLoginClient
      .loginPost(request, {method: 'POST', withCredentials: true})
      .catch((err: any) => {
        console.log(err)
      })
  }

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ログイン画面</Typography>

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

    </Container>
  )
}
