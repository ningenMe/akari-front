import { UrlConst } from 'constants/Const'
import { BlogServiceClient } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/SuzuServiceClientPb'

export const suzuApiBlogServiceClient = new BlogServiceClient(UrlConst.SUZU_API)
