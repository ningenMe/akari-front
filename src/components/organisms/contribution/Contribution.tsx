import { Container, IconButton } from '@mui/material'
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
import { SubTitle, Title } from '../../atoms/Title'
import { Typography } from '@material-ui/core'
import styles from './Contribution.module.scss'

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
    ,[datePeriod, statistics])

  return (
    // TODO templateに移す
    <Container>
      <Title title='Github Contribution' />
      <Typography variant='body2'>ningenMeのgithubのcontribution。1メモリ=1week。データの更新はまちまち。</Typography>
      {/*TODO cssを当てる*/}
      <PageNation
        centerText={getFormatDate(datePeriod.startDate) + " ~ " + getFormatDate(datePeriod.endDate)}
        datePeriod={datePeriod}
        setDatePeriod={setDatePeriod}
      />
      <StatusModule title='Create PullRequest' list={filteredCreatedPullRequestList} />
      <StatusModule title='Give Approve' list={filteredApprovedList} />
      <StatusModule title='Give Comment' list={filteredCommentedList} />
    </Container>
  )
}
const StatusModule = ({ title,list }: { title: string, list: ContributionSum[] }) => {
  return (
    <div className={styles.statusTitle}>
      <SubTitle title={title} />
      <Accumulation list={list} />
      <Graph list={list} />
    </div>
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
    <div className={styles.wrapper}>
      <IconButton onClick={leftClick} className={styles.button}>
        prev
        <ArrowLeftIcon fontSize='large' />
      </IconButton>
      <span className={styles.periodBox}>
        {centerText}
      </span>
      <IconButton onClick={rightClick} className={styles.button}>
        <ArrowRightIcon fontSize='large' />
        next
      </IconButton>
    </div>
  )
}
const Accumulation = ({ list }: { list: ContributionSum[] }) => {
  return (
    <div className={styles.accumulation}>
      sum: {sum(list)}  avg: {average(list)}
    </div>
  );
}

const average = (list: ContributionSum[]): string => {
  if (!list?.length) {
    return '0.00'
  }
  const numerator = list.length
  const enumerator = list.map(e => e.getSum()).reduce(
    (prev, curr) => prev + curr, 0
  )
  const res = enumerator / numerator
  return res.toFixed(2)
}
const sum = (list: ContributionSum[]): number => {
  return  list.map(e => e.getSum()).reduce(
    (prev, curr) => prev + curr, 0
  )
}
