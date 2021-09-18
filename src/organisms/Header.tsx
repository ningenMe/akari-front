import { Navbar } from 'react-bootstrap'
import { NavGithub } from 'molecules/NavGithub'
import { Dropdown } from 'molecules/Dropdown'
import { Links } from 'constants/Links'

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
