import { Nav,NavDropdown } from 'react-bootstrap';

export const NavBlog = () => {
    return (
        <Nav>
            <NavDropdown title="blog" id="blog">
                <NavDropdown.Item target="_blank" href="https://ningenme.hatenablog.com/archive">Hatena</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://profile.ameba.jp/ameba/ningenme">Ameba</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
export default NavBlog