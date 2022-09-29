import { HealthServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/HealthServiceClientPb'
import { GithubContributionServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/Github_contributionServiceClientPb'

// TODO constで管理
const HOSTNAME = 'https://nina-envoy-api.ningenme.net'
export const ninaApiHealthClient = new HealthServiceClient(HOSTNAME)
export const ninaApiGithubContributionClient = new GithubContributionServiceClient(HOSTNAME)

