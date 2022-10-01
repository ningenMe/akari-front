import { ContributionSum } from 'mami-interface/mami-generated-client/nina-api-grpc/github_contribution_pb'
import { Chart } from 'react-chartjs-2'
import React from 'react'
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement, BarController);

export const Graph = ({ list, startDate, endDate }: { list: ContributionSum[], startDate: Date, endDate: Date }) => {

  const filteredList = list.filter(e => {
    const targetDate = new Date(e.getDate())
    return startDate <= targetDate && targetDate <= endDate
  })

  const data = {
    // x 軸のラベル
    labels: filteredList.map(e => e.getDate()),
    datasets: [
      {
        label: 'TODO さまりー',
        // データの値
        data: filteredList.map(e => e.getSum()),
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
