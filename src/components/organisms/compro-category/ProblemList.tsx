import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { miikoApiMiikoServiceClient } from 'repository/MiikoApiRepository'
import { Problem, ProblemListGetRequest, ProblemListGetResponse, Tag } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import { kiwaApiUsersClient } from 'repository/KiwaApiRepository'
import { UsersMeGetResponse } from 'kiwa-api/typescript-axios-client/api'
import { PathConst } from 'constants/Const'
import { PageTextCard, ProblemLinkCard, ProblemNormalCard, TagLinkCard } from '../../atoms/compro-category/Card'
import { ProblemButton } from '../../atoms/compro-category/Button'

export const ProblemList = ({ page }: { page: number }): JSX.Element => {

  const [problemList, setProblemList] = useState<Problem[]>([])
  const [isAuthorizedComproCategory, setIsAuthorizedComproCategory] = useState<boolean>(false)
  const LIMIT = 30

  const problemListGet = async () => {
    const problemListGetRequest = new ProblemListGetRequest({
      offset: page * LIMIT,
      limit: LIMIT,
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
  }, [])

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
