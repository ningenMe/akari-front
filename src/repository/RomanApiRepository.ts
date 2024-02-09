import { UrlConst } from 'constants/Const'
import { Configuration, DefaultApi } from 'roman-api/client/src/generated';

const config = new Configuration({
  basePath: UrlConst.ROMAN_API
})
export const romanBookmarkApiClient = new DefaultApi(config);
