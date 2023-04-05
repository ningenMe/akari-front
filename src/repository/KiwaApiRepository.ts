import { UrlConst } from '../constants/Const'
import { Configuration } from 'kiwa-api/client/configuration'
import { HealthcheckApi } from 'kiwa-api/client/api'

const configuration = new Configuration({
  basePath: UrlConst.KIWA_API
})

export const kiwaApiHealthcheckClient = new HealthcheckApi(configuration)
