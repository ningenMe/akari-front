import axios from 'axios';
import {ApplicationMeta} from 'interfaces/ApplicationMeta'
import {Urls} from 'constants/Urls'

export const getApplicationMeta = async (applicationMetaId : string): Promise<ApplicationMeta> => {
  let applicationMeta:ApplicationMeta = {applicationMetaId:"none",updateTime:"2000-01-01T00:00:00"}

  const url = Urls.API_NINGENME_NET + "/v1/application-metas/" + applicationMetaId  + "/latest";

  await axios
    .get(url)
    .then((results) => {
      applicationMeta = results.data
    })
    .catch((error) => {
      console.log(error.status);
    });
  return applicationMeta;
}
