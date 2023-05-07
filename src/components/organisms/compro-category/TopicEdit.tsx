import { Container, FormControl, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  Reference,
  Topic,
  TopicGetRequest,
  TopicGetResponse,
  TopicPostRequest,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import styles from './TopicManage.module.scss'
import { TagEditButton, UpsertButton } from 'components/atoms/Button'

export const TopicEdit = (props: { topicId: string }): JSX.Element => {

  const [topicDisplayName, setTopicDisplayName] = useState<string>('')
  const [topicOrder, setTopicOrder] = useState<number>(0)
  const [topicText, setTopicText] = useState<string>('')
  const [referenceList, setReferenceList] = useState<Reference[]>([])
  const [url, setUrl] = useState<string>('')
  const [referenceDisplayName, setReferenceDisplayName] = useState<string>('')

  const [category, setCategory] = useState<Category | undefined>()

  const topicGet = async () => {
    const request = new TopicGetRequest({ topicId: props.topicId })
    const response = await miikoApiMiikoServiceClient.topicGet(request) as TopicGetResponse

    setTopicDisplayName(response.topic?.topicDisplayName ?? '')
    setTopicOrder(response.topic?.topicOrder ?? 0)
    setTopicText(response.topic?.topicText ?? '')
    setReferenceList(response.topic?.referenceList ?? [])
    setCategory(response.category)
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
      request.categoryId = category?.categoryId ?? ''
    }
    await miikoApiMiikoServiceClient.topicPost(request)
    await topicGet()
  }

  const referenceInsertClick = async () => {
    setReferenceList(list => list.concat([new Reference({ url: url, referenceDisplayName: referenceDisplayName })]))
    setUrl('')
    setReferenceDisplayName('')
  }

  const referenceDeleteClick = async ({ url, referenceDisplayName }: { url: string, referenceDisplayName: string }) => {
    setReferenceList(list => list.filter(it => it.url != url || it.referenceDisplayName != referenceDisplayName))
  }
  const referenceCardList = referenceList.map(it => {
    return (<TagEditButton
      name={it.referenceDisplayName + ': ' + it.url}
      key={it.referenceDisplayName + ': ' + it.url}
      onClick={() => referenceDeleteClick({ url: it.url, referenceDisplayName: it.referenceDisplayName })}
    />)
  })
  useEffect(() => {
    topicGet()
  }, [])

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>{category?.categoryDisplayName}</Typography>

      <FormControl fullWidth className={styles.wrapper}>
        <TextField
          disabled={true}
          label='categoryDisplayName'
          value={category?.categoryDisplayName ?? ''}
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
      </FormControl>

      <div className={styles.buttongrid}>
        <UpsertButton onClick={referenceInsertClick} />
      </div>
      <TextField
        label='url'
        onChange={(event) => {
          setUrl(event.target.value)
        }}
        value={url}
        className={styles.textfield}
      />
      <TextField
        label='referenceDisplayName'
        onChange={(event) => {
          setReferenceDisplayName(event.target.value)
        }}
        value={referenceDisplayName}
        className={styles.textfield}
      />

      <div className={styles.buttongrid}>
        <UpsertButton onClick={upsertClick} />
      </div>
      {referenceCardList}

    </Container>
  )
}
