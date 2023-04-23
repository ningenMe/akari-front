import { createConnectTransport } from '@bufbuild/connect-web'
import { MiikoService } from 'miiko-api/proto/gen_ts/v1/miiko_connect'
import { createPromiseClient } from '@bufbuild/connect'
import { HealthService } from 'miiko-api/proto/gen_ts/v1/health_connect'
import { UrlConst } from '../constants/Const'

export const miikoApiMiikoServiceClient = createPromiseClient(
  MiikoService,
  createConnectTransport({
    baseUrl: UrlConst.MIIKO_API
}))
export const miikoApiHealthServiceClient = createPromiseClient(
  HealthService,
  createConnectTransport({
    baseUrl: UrlConst.MIIKO_API
}))
