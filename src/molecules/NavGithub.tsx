import { Nav } from 'react-bootstrap';
import {Links} from 'constants/Links'

export const NavGithub = () => {
  return (
    <Nav>
      <Nav.Link href={Links.GITHUB.href}>{Links.GITHUB.name}</Nav.Link>
    </Nav>
  );
}
