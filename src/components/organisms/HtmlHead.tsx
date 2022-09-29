import { useRouter } from 'next/router'
import Head from 'next/head'
import { ImageConst, LinkConst, UrlConst } from '../../constants/Const'

export const HtmlHead = () => {
  const router = useRouter()

  return (
    <Head>
      {/* TODO ページごとに動的に切り替える */}
      <title>ningenMe.net</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='twitter:card' content='summary' />
      <meta property='og:url' content={UrlConst.NINGENME_NET + router.asPath} />
      <meta property='og:title' content={LinkConst.NINGENME_NET.name} />
      <meta property='og:image' content={ImageConst.NINGENME_NET} />
    </Head>
  )
}
