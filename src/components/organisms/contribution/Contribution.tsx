import { Container, Typography } from '@mui/material'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ninaApiNinaServiceClient } from '../../../repository/NinaApiRepository'
import { Graph } from './Graph'
import { DatePeriod, getEndDate, getFormatDate, getInitDatePeriod } from './DatePeriod'
import dayjs from 'dayjs'
import { SubTitle, Title } from '../../atoms/Title'
import styles from './Contribution.module.scss'
import {
  ContributionStatisticsGetRequest,
  ContributionStatisticsGetResponse,
  ContributionSum,
} from 'nina-api/proto/gen_ts/v1/nina_pb'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

export const Contribution = (): JSX.Element => {
  const initDatePeriod = getInitDatePeriod()

  const [statistics, setStatistics] = useState < ContributionStatisticsGetResponse | undefined>()

  const contributionStatisticsGet = async () => {
    const request = new ContributionStatisticsGetRequest({user: "ningenMe"})
    const response = await ninaApiNinaServiceClient.contributionStatisticsGet(request) as ContributionStatisticsGetResponse
    setStatistics(response)
  }

  useEffect(() => {
    contributionStatisticsGet()
  }, [])

  const createdPullRequestList = statistics?.createdPullRequestStatistics?.contributionSumList ?? []
  const approvedList = statistics?.approvedStatistics?.contributionSumList ?? []
  const commentedList = statistics?.commentedStatistics?.contributionSumList ?? []

  const [datePeriod, setDatePeriod] = useState <DatePeriod>(initDatePeriod)
  const [filteredCreatedPullRequestList, setFilteredCreatedPullRequestList] = useState(createdPullRequestList)
  const [filteredApprovedList, setFilteredApprovedList] = useState(approvedList)
  const [filteredCommentedList, setFilteredCommentedList] = useState(commentedList)

  useEffect(
    () => {
      setFilteredCreatedPullRequestList(
        createdPullRequestList.filter(e => {
          const targetDate = new Date(e.date)
          return datePeriod.startDate <= targetDate && targetDate <= datePeriod.endDate
        })
      )
      setFilteredApprovedList(
        approvedList.filter(e => {
          const targetDate = new Date(e.date)
          return datePeriod.startDate <= targetDate && targetDate <= datePeriod.endDate
        })
      )
      setFilteredCommentedList(
        commentedList.filter(e => {
          const targetDate = new Date(e.date)
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
      <StatusModule title='Create PullRequest' list={filteredCreatedPullRequestList} yMax={50} />
      <StatusModule title='Give Approve' list={filteredApprovedList} yMax={60} />
      <StatusModule title='Give Comment' list={filteredCommentedList} yMax={250} />
    </Container>
  )
}
const StatusModule = ({ title,list,yMax }: { title: string, list: ContributionSum[], yMax: number }) => {
  return (
    <div className={styles.statusTitle}>
      <SubTitle title={title} />
      <Accumulation list={list} />
      <Graph list={list} yMax={yMax} />
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
      <span onClick={leftClick} className={styles.button}>
        <ArrowLeft fontSize='large' />
      </span>
      <span className={styles.periodBox}>
        {centerText}
      </span>
      <span onClick={rightClick} className={styles.button}>
        <ArrowRight fontSize='large' />
      </span>
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
  const enumerator = list.map(e => e.sum).reduce(
    (prev, curr) => prev + curr, 0
  )
  const res = enumerator / numerator
  return res.toFixed(2)
}
const sum = (list: ContributionSum[]): number => {
  return  list.map(e => e.sum).reduce(
    (prev, curr) => prev + curr, 0
  )
}
