import { Container, Navbar, NavbarBrand } from "react-bootstrap";

function Header(props: { appTitle: string }) {
    return (        
        <Navbar expand="sm" variant="dark" bg="dark">
            <Container>
                <NavbarBrand> {props.appTitle} </NavbarBrand>
            </Container>
        </Navbar>        
    );
}

export default Header;