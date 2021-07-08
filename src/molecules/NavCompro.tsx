import { Nav,NavDropdown } from 'react-bootstrap';

export const NavBlog = () => {
    return (
        <Nav>
            <NavDropdown title="compro" id="compro">
                <NavDropdown.Item target="_blank" href="https://atcoder.jp/users/ningenMe">AtCoder</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://codeforces.com/profile/ningenMe">Codeforces</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://yukicoder.me/users/4145">yukicoder</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://csacademy.com/user/ningenMe">CSAcademy</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
export default NavBlog