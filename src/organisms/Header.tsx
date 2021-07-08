import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import NavGithub from 'molecules/NavGithub'
import NavCompro from 'molecules/NavCompro'
import NavBlog from 'molecules/NavBlog'

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home" >ningenme.net</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavGithub/>
                <NavCompro/>
                <NavBlog/>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header