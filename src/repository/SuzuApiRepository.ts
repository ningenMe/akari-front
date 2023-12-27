import { UrlConst } from 'constants/Const'
import { BlogServiceClient } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/SuzuServiceClientPb'
import { createConnectTransport } from '@bufbuild/connect-web'
import { createPromiseClient } from '@bufbuild/connect'

export const suzuApiBlogServiceClient = new BlogServiceClient(UrlConst.SUZU_API)

const transport = createConnectTransport({
    baseUrl: UrlConst.SUZU_API
})
