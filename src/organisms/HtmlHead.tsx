import Head from 'next/head'
import {Urls} from 'constants/Urls'
import {Links} from 'constants/Links'
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

export const HtmlHead = () => {
  const router = useRouter();

  const getTitle = (path:string) : string => {
    if(path.startsWith(Links.DIARIES.href)) return Links.DIARIES.name
    return Links.NINGENME_NET.name;
  } 
  const getImage = (path:string) : string => {
    if(path.startsWith(Links.DIARIES.href)) return "https://static.ningenme.net/net-front/dokata.png"
    return "https://static.ningenme.net/net-front/ningenme.png"
  }

  return (
    <Head>
        <title>ningenMe.net</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={Urls.NINGENME_NET + router.asPath} />
        <meta property="og:title" content={getTitle(router.pathname)} /> 
        <meta property="og:image" content={getImage(router.pathname)} />
    </Head>
  )
}