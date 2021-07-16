import Head from 'next/head'
import {Urls} from 'constants/Urls'
import { useRouter } from 'next/router';

export const HtmlHead = () => {
  const router = useRouter();
  return (
    <Head>
        <title>ningenMe.net</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={Urls.NINGENME_NET + router.asPath} />
        <meta property="og:image" content="public/dokata.png" />
    </Head>
  )
}