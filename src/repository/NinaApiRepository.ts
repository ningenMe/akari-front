import { HealthServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/HealthServiceClientPb'
import { GithubContributionServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/Github_contributionServiceClientPb'
import { UrlConst } from '../constants/Const'
import { BlogServiceClient } from 'mami-interface/mami-generated-client/nina-api-grpc/BlogServiceClientPb'
import { createConnectTransport } from '@bufbuild/connect-web'
import { createPromiseClient } from '@bufbuild/connect'
import { NinaService } from 'nina-api/proto/gen_ts/v1/nina_connect'
import { HealthService } from 'nina-api/proto/gen_ts/v1/health_connect'

const transport = createConnectTransport({
  baseUrl: UrlConst.NINA_API
})
export const ninaApiNinaServiceClient = createPromiseClient < typeof NinaService > (
  NinaService, transport
)
export const ninaApiHealthServiceClient = createPromiseClient < typeof HealthService > (
  HealthService, transport
)

export const ninaApiBlogClient = new BlogServiceClient(UrlConst.NINA_ENVOY)
