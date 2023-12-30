import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  CategoryListGetRequest,
  CategoryListGetResponse,
  Problem,
  ProblemGetRequest,
  ProblemGetResponse,
  ProblemPostRequest,
  Tag,
  Topic,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import styles from './ProblemManage.module.scss'
import { PageTextCard, TagLinkCard } from '../../atoms/compro-category/Card'
import { PathConst } from '../../../constants/Const'
import { DeleteButton, UpsertButton } from '../../atoms/compro-category/Button'
import { useRouter } from 'next/router'

export const ProblemEdit = (props: { problemId: string }): JSX.Element => {

  const [url, setUrl] = useState<string>('')
  const [problemDisplayName, setProblemDisplayName] = useState<string>('')
  const [estimation, setEstimation] = useState<number>(0)
  const [tagList, setTagList] = useState<Tag[]>([])

  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const router = useRouter()

  const problemGet = async () => {
    const problemGetRequest = new ProblemGetRequest({
      problemId: props.problemId,
    })
    const { problem } = await miikoApiMiikoServiceClient.problemGet(problemGetRequest) as ProblemGetResponse
    setUrl(problem?.url ?? '')
    setProblemDisplayName(problem?.problemDisplayName ?? '')
    setEstimation(problem?.estimation ?? 0)
    setTagList(problem?.tagList ?? [])
  }

  const categoryGet = async () => {
    const categoryListGetRequest = new CategoryListGetRequest({
      isRequiredTopic: true,
    })

    const categoryListGetResponse = await miikoApiMiikoServiceClient.categoryListGet(categoryListGetRequest) as CategoryListGetResponse
    setCategoryList(categoryListGetResponse.categoryList)
  }

  useEffect(() => {
    categoryGet()
    problemGet()
  }, [])

  const upsertClick = async () => {
    const request = new ProblemPostRequest()
    {
      request.problemId = props.problemId
      request.problem = new Problem({
        url: url,
        problemDisplayName: problemDisplayName,
        estimation: estimation,
        tagList: tagList,
      })
    }
    await miikoApiMiikoServiceClient.problemPost(request)
    await router.push(PathConst.COMPRO_CATEGORY_PROBLEM_LIST(0))
  }

  const handleChangeSelectedCategory = (event: SelectChangeEvent) => {
    const tmp = JSON.parse(event.target.value) as Category
    setSelectedCategory(tmp)
  }
  const handleChangeSelectedTopic = (event: SelectChangeEvent) => {
    const tmp = JSON.parse(event.target.value) as Topic
    setTagList((list) => [new Tag({ topicId: tmp.topicId, topicDisplayName: tmp.topicDisplayName })].concat(list))
  }
  const handleClickSelectedTag = (tag: Tag) => {
    setTagList((list) => list.filter(it => (it.topicId != tag.topicId)))
  }


  const getTagCardList = (tagList: Tag[]) => {
    return tagList
      .map((it) =>
        <div key={it.topicId}>
          <TagLinkCard
            href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)}
            topicDisplayName={it.topicDisplayName}
          />
          <DeleteButton
            name='delete'
            onClick={() => handleClickSelectedTag(it)}
          />
        </div>,
      )
  }

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>problem edit</Typography>
      </PageTextCard>
      <FormControl fullWidth className={styles.wrapper}>
        <TextField
          disabled={true}
          label='problemId'
          value={props.problemId}
          className={styles.idtextfield}
        />
        <TextField
          label='url'
          onChange={(event) => {
            setUrl(event.target.value)
          }}
          value={url}
          className={styles.textfield}
        />
        <TextField
          label='problemDisplayName'
          onChange={(event) => {
            setProblemDisplayName(event.target.value)
          }}
          value={problemDisplayName}
          className={styles.textfield}
        />
        <TextField
          type='number'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='estimation'
          onChange={(event) => {
            setEstimation(parseInt(event.target.value))
          }}
          value={estimation}
          className={styles.textfield}
        />
        <Select
          value={JSON.stringify(selectedCategory)}
          onChange={handleChangeSelectedCategory}
          className={styles.wrapper}
        >
          {categoryList.map((it) =>
            <MenuItem key={it.categoryId} value={JSON.stringify(it)}>
              {it.categoryDisplayName}
            </MenuItem>,
          )}
        </Select>
        <Select
          onChange={handleChangeSelectedTopic}
          className={styles.wrapper}
        >
          {selectedCategory?.topicList.map((it) =>
            <MenuItem key={it.topicId} value={JSON.stringify(it)}>
              {it.topicDisplayName}
            </MenuItem>,
          )}
        </Select>
      </FormControl>
      {getTagCardList(tagList)}
      <div className={styles.buttongrid}>
        <UpsertButton name='problem upsert' onClick={upsertClick} />
      </div>

    </Container>
  )
}
