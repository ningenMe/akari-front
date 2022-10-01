import { HealthServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/HealthServiceClientPb'
import { GithubContributionServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/Github_contributionServiceClientPb'
import { UrlConst } from '../constants/Const'
import { useEffect, useState } from 'react'
import {
  GetStatisticsRequest,
  GetStatisticsResponse,
} from 'mami-interface/mami-generated-client/nina-api-grpc/github_contribution_pb'

export const ninaApiHealthClient = new HealthServiceClient(UrlConst.NINA_ENVOY_API)
export const ninaApiGithubContributionClient = new GithubContributionServiceClient(UrlConst.NINA_ENVOY_API)

export const useNinaApiGetStatistics = () => {
  const [response, setResponse] = useState < GetStatisticsResponse | undefined>()

  const request = new GetStatisticsRequest()
  request.setUser("ningenMe")

  useEffect(() => {
    ninaApiGithubContributionClient.getStatistics(request, null)
      .then(res => setResponse(res))
      .catch(err => {
        console.log(err)
      })
  }, [request])

  return response
}
