import { Navbar } from 'react-bootstrap'
import { Links } from 'constants/Links'
import { NavGithub } from 'molecules/NavGithub'
import { Dropdown } from 'molecules/Dropdown'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Urls } from 'constants/Urls'

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href={Links.NINGENME_NET.href}>{Links.NINGENME_NET.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <NavGithub />
        <Dropdown title='compro' links={Links.COMPROS} />
        <Dropdown title='blog' links={Links.BLOGS} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export const Footer = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>&copy; 2021 Furuta Taishi</Navbar.Brand>
    </Navbar>
  )
}


export const HtmlHead = () => {
  const router = useRouter()

  const getTitle = (path: string): string => {
    if (path.startsWith(Links.DIARIES.href)) return Links.DIARIES.name
    return Links.NINGENME_NET.name
  }
  const getImage = (path: string): string => {
    if (path.startsWith(Links.DIARIES.href)) return 'https://static.ningenme.net/net-front/dokata.png'
    return 'https://static.ningenme.net/net-front/ningenme.png'
  }

  return (
    <Head>
      <title>ningenMe.net</title>HtmlHead
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='twitter:card' content='summary' />
      <meta property='og:url' content={Urls.NINGENME_NET + router.asPath} />
      <meta property='og:title' content={getTitle(router.pathname)} />
      <meta property='og:image' content={getImage(router.pathname)} />
    </Head>
  )
}

