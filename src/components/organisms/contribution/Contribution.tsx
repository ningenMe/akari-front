import { Container } from '@mui/material'
import { Title as CustomTitle } from '../../atoms/home/Title'
import React, { useEffect, useState } from 'react'
import { ninaApiGithubContributionClient } from '../../../repository/NinaApiRepository'
import {
  ContributionSummary,
  GetGithubContributionSummaryRequest,
  GetGithubContributionSummaryResponse,
} from 'mami-interface/mami-generated-client/nina-api-grpc/github_contribution_pb'

import { Chart } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Title } from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement);


const useNinaApiGithubContributionGetSummary = () => {
  const [response, setResponse] = useState < GetGithubContributionSummaryResponse | undefined>()

  const request = new GetGithubContributionSummaryRequest()
  request.setUser("ningenMe")

  useEffect(() => {
    ninaApiGithubContributionClient.getSummary(request, null)
      .then(res => setResponse(res))
      .catch(err => {
        console.log(err)
      })
  }, [request])

  return response
}

const Graph = ({ list }: { list: ContributionSummary[] }) => {
  const data = {
    // x 軸のラベル
    labels: list.map(e => e.getDate()),
    datasets: [
      {
        label: 'TODO さまりー',
        // データの値
        data: list.map(e => e.getCount()),
        // グラフの背景色
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        // グラフの枠線の色
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
        ],
        // グラフの枠線の太さ
        borderWidth: 2,
      },
    ],
  };
  return (
    <Chart type='bar' data={data} />
  );
}

export const Contribution = () => {

  const summary = useNinaApiGithubContributionGetSummary()
  const list = summary?.getPullrequestsummariesList() ?? []

  return (
    <Container>
      <CustomTitle title='Contribution' />
      <Graph list={list} />
    </Container>
  )
}
