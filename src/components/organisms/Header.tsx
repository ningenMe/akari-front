import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkConst } from '../../constants/LinkConst'
import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href={LinkConst.NINGENME_NET.href} className={styles.brand}>{LinkConst.NINGENME_NET.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className={styles.toggle}/>
      <Navbar.Collapse id='basic-navbar-nav' className={styles.collapse} >
        <Nav>
          <Nav.Link href={LinkConst.GITHUB.href}>{LinkConst.GITHUB.name}</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href={LinkConst.TWITTER.href}>{LinkConst.TWITTER.name}</Nav.Link>
        </Nav>
        <Dropdown title='compro' links={LinkConst.COMPROS} />
        <Dropdown title='blog' links={LinkConst.BLOGS} />
      </Navbar.Collapse>
    </Navbar>
  )
}


export const Dropdown = ({ title, links }: { title: string, links: ReadonlyArray<Link> }) => {
  const dropdowns = links.map((link) =>
    <NavDropdown.Item target='_blank' href={link.href} key={link.name}>{link.name}</NavDropdown.Item>,
  )
  return (
    <Nav>
      <NavDropdown title={title} id={title}>
        {dropdowns}
      </NavDropdown>
    </Nav>
  )
}

