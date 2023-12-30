import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  CategoryListGetRequest,
  CategoryListGetResponse,
  Reference,
  Topic,
  TopicGetRequest,
  TopicGetResponse,
  TopicPostRequest,
  TopicPostResponse,
  UrlGetRequest,
  UrlGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import styles from './TopicManage.module.scss'
import { DeleteButton, UpsertButton } from '../../atoms/compro-category/Button'
import { PageTextCard } from '../../atoms/compro-category/Card'
import { PathConst } from '../../../constants/Const'
import { useRouter } from 'next/router'

export const TopicEdit = (props: { topicId: string }): JSX.Element => {

  const [topicDisplayName, setTopicDisplayName] = useState<string>('')
  const [topicOrder, setTopicOrder] = useState<number>(0)
  const [topicText, setTopicText] = useState<string>('')
  const [referenceList, setReferenceList] = useState<Reference[]>([])
  const [url, setUrl] = useState<string>('')
  const [referenceDisplayName, setReferenceDisplayName] = useState<string>('')

  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const router = useRouter()

  const categoryGet = async () => {
    const categoryListGetRequest = new CategoryListGetRequest({
      isRequiredTopic: false,
    })

    const categoryListGetResponse = await miikoApiMiikoServiceClient.categoryListGet(categoryListGetRequest) as CategoryListGetResponse
    setCategoryList(categoryListGetResponse.categoryList)
  }

  const topicGet = async () => {
    const request = new TopicGetRequest({ topicId: props.topicId })
    const response = await miikoApiMiikoServiceClient.topicGet(request) as TopicGetResponse

    setTopicDisplayName(response.topic?.topicDisplayName ?? '')
    setTopicOrder(response.topic?.topicOrder ?? 0)
    setTopicText(response.topic?.topicText ?? '')
    setReferenceList(response.topic?.referenceList ?? [])
    setSelectedCategory(response.category)
  }

  const urlGet = async (tmpUrl: string) => {
    const request = new UrlGetRequest({
      url: tmpUrl,
    })

    const response = await miikoApiMiikoServiceClient.urlGet(request) as UrlGetResponse
    setReferenceDisplayName(response.title)
  }

  useEffect(() => {
    categoryGet()
    topicGet()
  }, [])

  const handleChangeSelectedCategory = (event: SelectChangeEvent) => {
    const tmp = JSON.parse(event.target.value) as Category
    setSelectedCategory(tmp)
  }

  const upsertClick = async () => {
    const request = new TopicPostRequest()
    {
      request.topicId = props.topicId
      request.topic = new Topic({
        topicId: props.topicId,
        topicDisplayName: topicDisplayName,
        topicOrder: topicOrder,
        topicText: topicText,
        referenceList: referenceList,
      })
      request.categoryId = selectedCategory?.categoryId ?? ''
    }
    const response = await miikoApiMiikoServiceClient.topicPost(request) as TopicPostResponse
    await router.push(PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(response.topicId))
  }

  const referenceInsertClick = async () => {
    setReferenceList(list => list.concat([new Reference({ url: url, referenceDisplayName: referenceDisplayName })]))
    setUrl('')
    setReferenceDisplayName('')
  }

  const referenceDeleteClick = async ({ url, referenceDisplayName }: { url: string, referenceDisplayName: string }) => {
    setReferenceList(list => list.filter(it => it.url != url || it.referenceDisplayName != referenceDisplayName))
  }

  const getReferenceCardList = (referenceList: Reference[]) => {
    return referenceList
      .map((it) =>
        <div key={it.referenceId}>
          <p>
            ・<a href={it.url} rel='noreferrer noopener' target='_blank'>{it.referenceDisplayName}</a>
          </p>
          <DeleteButton
            name='delete'
            onClick={() => referenceDeleteClick({ url: it.url, referenceDisplayName: it.referenceDisplayName })}
          />
        </div>,
      )
  }

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>topic edit</Typography>
      </PageTextCard>

      <FormControl fullWidth className={styles.wrapper}>
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
        <TextField
          disabled={true}
          label='categoryDisplayName'
          value={selectedCategory?.categoryDisplayName ?? ''}
          className={styles.idtextfield}
        />
        <TextField
          disabled={true}
          label='topicId'
          value={props.topicId}
          className={styles.idtextfield}
        />
        <TextField
          label='topicDisplayName'
          onChange={(event) => {
            setTopicDisplayName(event.target.value)
          }}
          value={topicDisplayName}
          className={styles.textfield}
        />
        <TextField
          type='number'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='topicOrder'
          onChange={(event) => {
            setTopicOrder(parseInt(event.target.value))
          }}
          value={topicOrder}
          className={styles.textfield}
        />
        <TextField
          label='topicText'
          onChange={(event) => {
            setTopicText(event.target.value)
          }}
          value={topicText}
          className={styles.textfield}
        />
        {getReferenceCardList(referenceList)}
        <TextField
          label='referenceUrl (optional)'
          onChange={async (event) => {
            setUrl(event.target.value)
            urlGet(event.target.value)
          }}
          value={url}
          className={styles.textfield}
        />
        <TextField
          label='referenceDisplayName (optional)'
          onChange={(event) => {
            setReferenceDisplayName(event.target.value)
          }}
          value={referenceDisplayName}
          className={styles.textfield}
        />
      </FormControl>


      <div className={styles.buttongrid}>
        <UpsertButton name='reference insert' onClick={referenceInsertClick} />
        <UpsertButton name='topic upsert' onClick={upsertClick} />
      </div>

    </Container>
  )
}
