import { Nav,NavDropdown } from 'react-bootstrap';
import {Link} from 'interfaces/Link'

export const Dropdown = ({title,links} : {title:string, links:ReadonlyArray<Link>}) => {
    const dropdowns = links.map((link) =>
        <NavDropdown.Item target="_blank" href={link.href} key={link.name}>{link.name}</NavDropdown.Item>
    );
    return (
        <Nav>
            <NavDropdown title={title} id={title}>
                {dropdowns}
            </NavDropdown>
        </Nav>
    );
}
