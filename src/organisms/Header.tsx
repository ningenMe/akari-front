import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

export const Header: React.FC = () => {
    const [navbarToggleOpen, setNavbarToggleOpen] = useState(false);
    const toggleNavbar = () => setNavbarToggleOpen(!navbarToggleOpen);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home" >ningenme.net</Navbar.Brand>
            {/*<Navbar.Toggle onClick={toggleNavbar} />*/}
            {/*<Navbar.Collapse isOpen={navbarToggleOpen}>*/}
            {/*    <Nav className="mr-auto" navbar>*/}
            {/*        <NavItem>*/}
            {/*            <NavLink href="localhost:3000">hoge</NavLink>*/}
            {/*        </NavItem>*/}
            {/*    </Nav>*/}
            {/*    <Nav className="ml-auto" navbar>*/}
            {/*        <NavItem>*/}
            {/*            <NavLink href="https://twitter.com/ningenMe">ningenMe</NavLink>*/}
            {/*        </NavItem>*/}
            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}
        </Navbar>
    );
}
export default Header