import { Navbar } from 'react-bootstrap';
import NavGithub from 'molecules/NavGithub'
import Dropdown from 'molecules/Dropdown'
import Links from 'constants/Links'

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href={Links.betaNingenMeNet.url} >{Links.betaNingenMeNet.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavGithub/>
                <Dropdown title = "compro" links={Links.compros} />
                <Dropdown title = "blog"   links={Links.blogs} />
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header