import { UrlConst } from 'constants/Const'
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
