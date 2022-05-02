import { Navbar } from 'react-bootstrap'
import { LinkConst } from 'constants/LinkConst'
import { ImageConst } from 'constants/ImageConst'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Dropdown, NavGithub, NavTwitter } from 'molecules/NingenmeNetTemplateMolecule'
import { UrlConst } from 'constants/UrlConst'

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href={LinkConst.NINGENME_NET.href}>{LinkConst.NINGENME_NET.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <NavGithub />
        <NavTwitter />
        <Dropdown title='compro' links={LinkConst.COMPROS} />
        <Dropdown title='blog' links={LinkConst.BLOGS} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export const HtmlHead = () => {
  const router = useRouter()

  const getTitle = (path: string): string => {
    if (path.startsWith(LinkConst.DIARIES.href)) return LinkConst.DIARIES.name
    return LinkConst.NINGENME_NET.name
  }
  const getImage = (path: string): string => {
    if (path.startsWith(LinkConst.DIARIES.href)) return ImageConst.DOKATA
    return ImageConst.NINGENME_NET
  }

  return (
    <Head>
      <title>ningenMe.net</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='twitter:card' content='summary' />
      <meta property='og:url' content={UrlConst.NINGENME_NET + router.asPath} />
      <meta property='og:title' content={getTitle(router.pathname)} />
      <meta property='og:image' content={getImage(router.pathname)} />
    </Head>
  )
}

interface HtmlHeadElement {
  title : string,
  image : string
}

export const CustomHtmlHead = (htmlHeadElement:HtmlHeadElement) => {

  const router = useRouter()

  return (
    <Head>
      <title>{htmlHeadElement.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='twitter:card' content='summary' />
      <meta property='og:url' content={UrlConst.NINGENME_NET + router.asPath} />
      <meta property='og:title' content={htmlHeadElement.title} />
      <meta property='og:image' content={htmlHeadElement.image} />
    </Head>
  )
}
