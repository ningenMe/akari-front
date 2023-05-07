import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Category,
  Topic,
  TopicListGetRequest,
  TopicListGetResponse, TopicPostRequest,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import styles from './TopicManage.module.scss'
import { UpsertButton } from 'components/atoms/Button'

export const TopicManage = ({categorySystemName} : {categorySystemName: string}): JSX.Element => {

  const DUMMY_TOPIC_ID = 'A new topicId will be created automatically'
  const DUMMY_TOPIC = new Topic({topicId: DUMMY_TOPIC_ID, topicDisplayName: '新規作成'})
  const [selectedTopic, setSelectedTopic] = useState<Topic>(DUMMY_TOPIC)
  const [topicId, setTopicId] = useState<string>(DUMMY_TOPIC_ID)
  const [topicDisplayName, setTopicDisplayName] = useState<string>('')
  const [topicOrder, setTopicOrder] = useState<number>(0)

  const [category, setCategory] = useState < Category | undefined>()
  const [topicList, setTopicList] = useState <Topic[]>([])


  const topicListGet = async () => {
    const topicListGetRequest = new TopicListGetRequest({categorySystemName: categorySystemName})
    const topicListGetResponse = await miikoApiMiikoServiceClient.topicListGet(topicListGetRequest) as TopicListGetResponse
    setCategory(topicListGetResponse.category)
    setTopicList(topicListGetResponse.topicList?? [])
  }


  const upsertClick = async () => {
    const request = new TopicPostRequest()
    {
      if (topicId != DUMMY_TOPIC_ID) {
        request.topicId = topicId
      }
      request.topic = new Topic({
        topicId: topicId,
        topicDisplayName: topicDisplayName,
        topicOrder: topicOrder
      })
      request.categoryId = category?.categoryId ?? ''
    }
    await miikoApiMiikoServiceClient.topicPost(request)
    setAllState(DUMMY_TOPIC)
    await topicListGet()
  }

  useEffect(() => {
    topicListGet()
  }, [])

  const cardList = topicList
    .sort((l,r) => l.topicOrder-r.topicOrder)
    .map((it) =>
    <CustomNormalCard key={it.topicId}>
      <div>{it.topicDisplayName}</div>
    </CustomNormalCard>
  )

  const setAllState = (topic: Topic) => {
    setSelectedTopic(topic);
    setTopicId(topic.topicId)
    setTopicDisplayName(topic.topicDisplayName)
    setTopicOrder(topic.topicOrder)
  }

  const handleChange = (event: SelectChangeEvent) => {
    const tmp = JSON.parse(event.target.value) as Topic
    setAllState(tmp)
  };

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
        <Select
          value={JSON.stringify(selectedTopic)}
          onChange={handleChange}
          className={styles.wrapper}
        >
          {[DUMMY_TOPIC].concat(topicList).map((it) =>
            <MenuItem key={it.topicId} value={JSON.stringify(it)}>
              {it.topicDisplayName}
            </MenuItem>
          )}
        </Select>
        <TextField
          disabled={true}
          label='topicId'
          value={topicId}
          className={styles.idtextfield}
        />
        <TextField
          label='topicDisplayName'
          onChange={(event) => {setTopicDisplayName(event.target.value)}}
          value={topicDisplayName}
          className={styles.textfield}
        />
        <TextField
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='topicOrder'
          onChange={(event) => {setTopicOrder(parseInt(event.target.value))}}
          value={topicOrder}
          className={styles.textfield}
        />
      </FormControl>
      <div className={styles.buttongrid}>
        <UpsertButton onClick={upsertClick} />
      </div>

      <div className={styles.grid}>
        {cardList}
      </div>

    </Container>
  )
}
