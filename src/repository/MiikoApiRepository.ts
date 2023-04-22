import { createConnectTransport } from '@bufbuild/connect-web'
import { MiikoService } from 'miiko-api/proto/gen_ts/v1/miiko_connect'
import { createPromiseClient } from '@bufbuild/connect'

export const miikoApiClient = createPromiseClient(
  MiikoService,
  createConnectTransport({
    baseUrl: 'http://localhost:8081',
}))

