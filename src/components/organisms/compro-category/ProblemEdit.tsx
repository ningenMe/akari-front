import { Container, FormControl, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category, CategoryListGetRequest, CategoryListGetResponse, Problem, ProblemGetRequest, ProblemGetResponse, Tag,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import styles from './ProblemManage.module.scss'
import { TagButton } from '../../atoms/Button'
import { CustomLinkCard } from '../CustomCard'

export const ProblemEdit = (props: {problemId: string}): JSX.Element => {

  const [url, setUrl] = useState <string>('')
  const [problemDisplayName, setProblemDisplayName] = useState <string>('')
  const [estimation, setEstimation] = useState <number>(0)

  const [problem, setProblem] = useState < Problem>()
  const [categoryList, setCategoryList] = useState < Category[]>([])

  const problemGet = async () => {
    const problemGetRequest = new ProblemGetRequest({
      problemId: props.problemId
    })

    const problemGetResponse = await miikoApiMiikoServiceClient.problemGet(problemGetRequest) as ProblemGetResponse
    setProblem(problemGetResponse.problem)
  }

  const categoryGet = async () => {
    const categoryListGetRequest = new CategoryListGetRequest({
      isRequiredTopic: false
    })

    const categoryListGetResponse = await miikoApiMiikoServiceClient.categoryListGet(categoryListGetRequest) as CategoryListGetResponse
    setCategoryList(categoryListGetResponse.categoryList)
  }

  useEffect(() => {
    categoryGet()
    problemGet()
  }, [])

  const getTagCardList = (tagList: Tag[]) => {
    return tagList
      .map((it) =>
        <TagButton name={it.topicDisplayName} key={it.topicId} />
      )
  }

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
      <CustomLinkCard href={problem?.url ?? ''} key={problem?.problemId}>
        <div>{problem?.problemDisplayName}</div>
        {getTagCardList(problem?.tagList ?? [])}
      </CustomLinkCard>

    </Container>
  )
}
