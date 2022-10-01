import { Button, Container, IconButton } from '@mui/material'
import { Title as CustomTitle } from '../../atoms/home/Title'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ninaApiGithubContributionClient } from '../../../repository/NinaApiRepository'
import { Graph } from './Graph'
import { DatePeriod, getEndDate, getFormatDate, getInitDatePeriod } from './DatePeriod'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import dayjs from 'dayjs'
import {
  ContributionSum,
  GetStatisticsRequest,
  GetStatisticsResponse,
} from 'mami-interface/mami-generated-client/nina-api-grpc/github_contribution_pb'

export const Contribution = () => {
  const initDatePeriod = getInitDatePeriod()

  const [statistics, setStatistics] = useState < GetStatisticsResponse | undefined>()

  useEffect(() => {
    const request = new GetStatisticsRequest()
    request.setUser("ningenMe")

    ninaApiGithubContributionClient.getStatistics(request, null)
      .then(res => setStatistics(res))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const createdPullRequestList = statistics?.getCreatedpullrequeststatistics()?.getContributionsumlistList() ?? []
  const approvedList = statistics?.getApprovedstatistics()?.getContributionsumlistList() ?? []
  const commentedList = statistics?.getCommentedstatistics()?.getContributionsumlistList() ?? []

  const [datePeriod, setDatePeriod] = useState <DatePeriod>(initDatePeriod)
  const [filteredCreatedPullRequestList, setFilteredCreatedPullRequestList] = useState(createdPullRequestList)
  const [filteredApprovedList, setFilteredApprovedList] = useState(approvedList)
  const [filteredCommentedList, setFilteredCommentedList] = useState(commentedList)

  useEffect(
    () => {
      setFilteredCreatedPullRequestList(
        createdPullRequestList.filter(e => {
          const targetDate = new Date(e.getDate())
          return datePeriod.startDate <= targetDate && targetDate <= datePeriod.endDate
        })
      )
      setFilteredApprovedList(
        approvedList.filter(e => {
          const targetDate = new Date(e.getDate())
          return datePeriod.startDate <= targetDate && targetDate <= datePeriod.endDate
        })
      )
      setFilteredCommentedList(
        commentedList.filter(e => {
          const targetDate = new Date(e.getDate())
          return datePeriod.startDate <= targetDate && targetDate <= datePeriod.endDate
        })
      )
    }
    ,[datePeriod])

  return (
    <Container>
      {/*TODO cssを当てる*/}
      <PageNation
        centerText={getFormatDate(datePeriod.startDate) + " ~ " + getFormatDate(datePeriod.endDate)}
        datePeriod={datePeriod}
        setDatePeriod={setDatePeriod}
      />
      <CustomTitle title='Create PullRequest' />
      <Graph list={filteredCreatedPullRequestList} />
      <CustomTitle title='Give Approve' />
      <Graph list={filteredApprovedList} />
      <CustomTitle title='Give Comment' />
      <Graph list={filteredCommentedList} />
    </Container>
  )
}

const PageNation = ({centerText, datePeriod, setDatePeriod}
                      : {centerText: string, datePeriod: DatePeriod, setDatePeriod: Dispatch<SetStateAction<DatePeriod>>} ) => {
  const leftClick = () => {
    const startDate = dayjs(datePeriod.startDate).subtract(6,'M')
    setDatePeriod({
      startDate: startDate.toDate(),
      endDate: getEndDate(startDate).toDate()
    })
  }
  const rightClick = () => {
    const startDate = dayjs(datePeriod.startDate).add(6,'M')
    setDatePeriod({
      startDate: startDate.toDate(),
      endDate: getEndDate(startDate).toDate()
    })
  }
  return (
    <div>
      <IconButton color='primary' onClick={leftClick}>
        prev
        <ArrowLeftIcon fontSize='large' />
      </IconButton>
      <Button variant='outlined' color='primary' size='large' >
        {centerText}
      </Button>
      <IconButton color='primary' onClick={rightClick}>
        <ArrowRightIcon fontSize='large' />
        next
      </IconButton>
    </div>
  )
}

const average = (list: ContributionSum[]): Number => {
  if (!list?.length) {
    return 0
  }
  const numerator = list.length
  const enumerator = list.map(e => e.getSum()).reduce(
    (prev, curr) => prev + curr, 0
  )
  return enumerator / numerator
}
const sum = (list: ContributionSum[]): Number => {
  return  list.map(e => e.getSum()).reduce(
    (prev, curr) => prev + curr, 0
  )
}
