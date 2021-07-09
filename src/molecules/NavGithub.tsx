import { Nav } from 'react-bootstrap';
import Links from 'constants/Links'

export const NavGithub = () => {
    return (
        <Nav>
            <Nav.Link href={Links.github.url}>{Links.github.name}</Nav.Link>
        </Nav>
    );
}
export default NavGithub