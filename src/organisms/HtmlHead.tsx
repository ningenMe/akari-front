import Head from 'next/head'
import {Urls} from 'constants/Urls'
import {Links} from 'constants/Links'
import { useRouter } from 'next/router';

export const HtmlHead = () => {
  const router = useRouter();

  const getTitle = (path:string) : string => {
    if(path.startsWith(Links.DIARIES.href)) return Links.DIARIES.name
    return Links.NINGENME_NET.name;
  } 
  return (
    <Head>
        <title>ningenMe.net</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={Urls.NINGENME_NET + router.asPath} />
        <meta property="og:title" content={getTitle(router.pathname)} /> 
        <meta property="og:image" content="https://static.ningenme.net/net-front/dokata.png" />
    </Head>
  )
}