import { UrlConst } from 'constants/Const'
import { Configuration } from 'kiwa-api/typescript-axios-client/configuration'
import { HealthcheckApi, LoginApi, UsersApi } from 'kiwa-api/typescript-axios-client/api'

const configuration = new Configuration({
  basePath: UrlConst.KIWA_API
})

export const kiwaApiHealthcheckClient = new HealthcheckApi(configuration)
export const kiwaApiLoginClient = new LoginApi(configuration)
export const kiwaApiUsersClient = new UsersApi(configuration)
