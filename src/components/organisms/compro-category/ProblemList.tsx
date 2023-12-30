import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import { Problem, ProblemListGetRequest, ProblemListGetResponse, Tag } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { PathConst } from 'constants/Const'
import { PageTextCard, ProblemLinkCard, ProblemNormalCard, TagLinkCard } from '../../atoms/compro-category/Card'
import { ProblemButton, UpsertButton } from 'components/atoms/compro-category/Button'

export const ProblemList = ({ page }: { page: number }): JSX.Element => {

  const [problemList, setProblemList] = useState<Problem[]>([])
  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)
  const [isDesc, setIsDesc] = useState<boolean>(true)
  const LIMIT = 30

  const problemListGet = async () => {
    const problemListGetRequest = new ProblemListGetRequest({
      limit: LIMIT,
      offset: page * LIMIT,
      isDesc: isDesc,
    })
    const problemListGetResponse = await miikoApiMiikoServiceClient.problemListGet(problemListGetRequest) as ProblemListGetResponse
    kiwaApiUsersClient.usersGet({ method: 'GET', withCredentials: true })
      .then((res: { data: UsersMeGetResponse }) => setIsAuthorizedComproCategory(res.data.authority.comproCategory))
      .catch((err: Error) => {
        console.log(err)
      })

    setProblemList(problemListGetResponse.problemList ?? [])
  }

  useEffect(() => {
    problemListGet()
  }, [isDesc])

  const getTagCardList = (tagList: Tag[]) => {
    return tagList
      .map((it) =>
        <TagLinkCard
          href={PathConst.COMPRO_CATEGORY_TOPIC_PROBLEM(it.topicId)}
          topicDisplayName={it.topicDisplayName}
          key={it.topicId} />,
      )
  }

  const cardList = problemList
    .map((it) =>
      <ProblemNormalCard key={it.problemId}>
        <ProblemLinkCard href={it.url} problemDisplayName={it.problemDisplayName} key={it.problemId} />
        {isAuthorizedComproCategory ?
          <ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_EDIT(it.problemId)} name={'edit'} /> : <></>}
        <div>
          {getTagCardList(it.tagList)}
        </div>
      </ProblemNormalCard>,
    )

  return (
    <Container>
      <PageTextCard>
        <Typography variant='body2'>{page}ページ目</Typography>
      </PageTextCard>
      <ProblemButton
        href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(page - 1)}
        name='←' />
      <ProblemButton
        href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(page + 1)}
        name='→' />
      <UpsertButton name={'sort is ' + (isDesc ? 'desc' : 'asc')} onClick={async () => {
        setIsDesc((isDesc) => !isDesc)
      }} />

      {cardList}

      <ProblemButton
        href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(page - 1)}
        name='←' />
      <ProblemButton
        href={PathConst.COMPRO_CATEGORY_PROBLEM_LIST(page + 1)}
        name='→' />

    </Container>
  )
}
