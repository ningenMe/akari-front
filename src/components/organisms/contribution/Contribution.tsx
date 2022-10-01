import { Container } from '@mui/material'
import { Title as CustomTitle } from '../../atoms/home/Title'
import React, { useState } from 'react'
import { useNinaApiGetStatistics } from '../../../repository/NinaApiRepository'
import { Graph } from './Graph'

export const Contribution = () => {

  const [startDate, setStartDate] = useState < Date>(new Date('2022-03-01'))
  const [endDate, setEndDate] = useState < Date>(new Date())

  const statistics = useNinaApiGetStatistics()
  const createdPullRequestList = statistics?.getCreatedpullrequeststatistics()?.getContributionsumlistList() ?? []
  const approvedList = statistics?.getApprovedstatistics()?.getContributionsumlistList() ?? []
  const commentedList = statistics?.getCommentedstatistics()?.getContributionsumlistList() ?? []

  return (
    <Container>
      <CustomTitle title='Create PullRequest' />
      <Graph list={createdPullRequestList} startDate={startDate} endDate={endDate} />
      <CustomTitle title='Give Approve' />
      <Graph list={approvedList} startDate={startDate} endDate={endDate} />
      <CustomTitle title='Give Comment' />
      <Graph list={commentedList} startDate={startDate} endDate={endDate} />
    </Container>
  )
}
