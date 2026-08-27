
function Header(props: { appTitle: string }) {
    return (
        <header className="banner">
            <h3>{props.appTitle}</h3>
        </header>
    );
}

export default Header;