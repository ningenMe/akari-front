import { HealthServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/HealthServiceClientPb'
import { GithubContributionServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/Github_contributionServiceClientPb'
import { UrlConst } from '../constants/Const'

export const ninaApiHealthClient = new HealthServiceClient(UrlConst.NINA_ENVOY_API)
export const ninaApiGithubContributionClient = new GithubContributionServiceClient(UrlConst.NINA_ENVOY_API)
