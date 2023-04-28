import { HealthServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/HealthServiceClientPb'
import { GithubContributionServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/Github_contributionServiceClientPb'
import { UrlConst } from '../constants/Const'
import { BlogServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/BlogServiceClientPb'

export const ninaApiHealthClient = new HealthServiceClient(UrlConst.NINA_ENVOY)
export const ninaApiGithubContributionClient = new GithubContributionServiceClient(UrlConst.NINA_ENVOY)
export const ninaApiBlogClient = new BlogServiceClient(UrlConst.NINA_ENVOY)
