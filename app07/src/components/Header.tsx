import { useContext } from "react";
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { ThemeContext } from "../lib/context/ThemeProvider";

const menus: { path: string, label: string, icon: string }[] = [
    { label: "Home", path: "/", icon: "house" },
    { label: "About Us", path: "/about", icon: "info-square" },
    { label: "Consumers", path: "/cmrs", icon: "file-person" },
    { label: "New Consumer", path: "/newcmr", icon: "file-earmark-person" },
    { label: "Inventory", path: "/inv", icon: "bag" },
    { label: "New Item", path: "/newitem", icon: "bag-check" },
];

function Header({ appTitle }: { appTitle: string }) {

    const { pathname } = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext) ?? {};
    
    return (
        <Navbar expand="lg" bg={theme=="dark"?"light":"dark"} data-bs-theme={theme=="dark"?"light":"dark"}>
            <Container>
                <NavbarBrand> {appTitle} </NavbarBrand>
                <NavbarToggle aria-controls="mymenu" />
                <NavbarCollapse id="mymenu">
                    <Nav className="me-auto">
                        {
                            menus.map(menu => (
                                <NavLink key={menu.path} href={menu.path} 
                                    className={menu.path===pathname?"active":""}>
                                    <i className={`bi bi-${menu.icon}`} />  {menu.label}
                                </NavLink>
                            ))
                        }
                    </Nav>
                    <div className="d-flex ms-auto">
                        <Button
                            variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </Button>
                    </div>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default Header;