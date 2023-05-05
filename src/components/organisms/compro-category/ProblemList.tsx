import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import {
  Problem,
  ProblemListGetRequest,
  ProblemListGetRequest_SortType, ProblemListGetResponse, Tag,
  Topic,
  TopicListGetResponse,
} from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { CustomLinkCard, CustomNormalCard } from 'components/organisms/CustomCard'
import { kiwaApiUsersClient } from '../../../repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { ManageButton } from '../../atoms/Button'
import { PathConst } from '../../../constants/Const'

export const ProblemList = (): JSX.Element => {

  const [problemList, setProblemList] = useState <Problem[]>([])
  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)

  const problemListGet = async () => {
    const problemListGetRequest = new ProblemListGetRequest({
      sortType: ProblemListGetRequest_SortType.CREATED_TIME,
      offset: 0,
      limit: 30,
    })
    const problemListGetResponse = await miikoApiMiikoServiceClient.problemListGet(problemListGetRequest) as ProblemListGetResponse
    kiwaApiUsersClient.usersGet({method: 'GET', withCredentials: true})
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })

    setProblemList(problemListGetResponse.problemList?? [])
  }

  useEffect(() => {
    problemListGet()
  }, [])

  const getTagCardList = (tagList: Tag[]) => {
    return tagList
      .map((it) =>
        <CustomNormalCard key={it.topicId}>
          <div>{it.topicDisplayName}</div>
        </CustomNormalCard>
      )
  }

  const cardList = problemList
    .sort((l,r) => l.estimation - r.estimation)
    .map((it) =>
      <CustomLinkCard href={it.url} key={it.problemId}>
        <div>{it.problemDisplayName}</div>
        {getTagCardList(it.tagList)}
      </CustomLinkCard>
    )

  return (
    <Container>
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>problem list</Typography>
      {isAuthorizedComproCategory ? <ManageButton href={''} /> : <></> }
      {cardList}

    </Container>
  )
}
