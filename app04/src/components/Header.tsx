import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

function Header({appTitle}: { appTitle: string }) {
    return (        
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <NavbarBrand> {appTitle} </NavbarBrand>
                <NavbarToggle aria-controls="mymenu" />
                <NavbarCollapse id="mymenu">
                    <Nav className="me-auto">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/cmrs">Consumers</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>        
    );
}

export default Header;