import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category, CategoryListGetRequest, CategoryListGetResponse,
  CategoryPostRequest,
  Topic,
  TopicListGetRequest,
  TopicListGetResponse, TopicPostRequest,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import styles from './TopicManage.module.scss'
import { DeleteButton, UpsertButton } from '../../atoms/Button'
import { kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'

export const ProblemCreate = (): JSX.Element => {

  const [url, setUrl] = useState <string>('')
  const [problemDisplayName, setProblemDisplayName] = useState <string>('')
  const [estimation, setEstimation] = useState <number>(0)

  const [categoryList, setCategoryList] = useState < Category[]>([])

  const categoryGet = async () => {
    const categoryListGetRequest = new CategoryListGetRequest({
      isRequiredTopic: false
    })

    const categoryListGetResponse = await miikoApiMiikoServiceClient.categoryListGet(categoryListGetRequest) as CategoryListGetResponse
    setCategoryList(categoryListGetResponse.categoryList)
  }

  useEffect(() => {
    categoryGet()
  }, [])

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>problem 新規作成</Typography>

      <FormControl fullWidth className={styles.wrapper}>
        <TextField
          label='url'
          onChange={(event) => {setUrl(event.target.value)}}
          value={url}
          className={styles.textfield}
        />
        <TextField
          label='problemDisplayName'
          onChange={(event) => {setProblemDisplayName(event.target.value)}}
          value={problemDisplayName}
          className={styles.textfield}
        />
        <TextField
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='estimation'
          onChange={(event) => {setEstimation(parseInt(event.target.value))}}
          value={estimation}
          className={styles.textfield}
        />
      </FormControl>

    </Container>
  )
}
