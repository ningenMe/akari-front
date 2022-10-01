import { Container } from '@mui/material'
import { Title as CustomTitle } from '../../atoms/home/Title'
import React from 'react'
import { useNinaApiGetStatistics } from '../../../repository/NinaApiRepository'
import { Graph } from './Graph'

export const Contribution = () => {

  const statistics = useNinaApiGetStatistics()
  const createdPullRequestList = statistics?.getCreatedpullrequeststatistics()?.getContributionsumlistList() ?? []
  const approvedList = statistics?.getApprovedstatistics()?.getContributionsumlistList() ?? []
  const commentedList = statistics?.getCommentedstatistics()?.getContributionsumlistList() ?? []

  return (
    <Container>
      <CustomTitle title='Contribution' />
      <Graph list={createdPullRequestList} />
      <Graph list={approvedList} />
      <Graph list={commentedList} />
    </Container>
  )
}
