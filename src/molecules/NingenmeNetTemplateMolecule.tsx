import { Nav, NavDropdown } from 'react-bootstrap'
import { Links } from 'constants/Links'
import { Link } from 'interfaces/Link'

export const NavGithub = () => {
  return (
    <Nav>
      <Nav.Link href={Links.GITHUB.href}>{Links.GITHUB.name}</Nav.Link>
    </Nav>
  )
}

export const NavTwitter = () => {
  return (
    <Nav>
      <Nav.Link href={Links.TWITTER.href}>{Links.TWITTER.name}</Nav.Link>
    </Nav>
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

