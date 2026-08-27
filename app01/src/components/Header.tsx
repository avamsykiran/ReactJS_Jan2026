import { Component, type ReactNode } from "react";

class Header extends Component<{appTitle:string}, {}> {

    constructor(props:{appTitle:string}) {
        super(props);
        this.state={};
    }

    render(): ReactNode {
        return (
            <header className="banner">
                <h3>{this.props.appTitle}</h3>
            </header>
        );
    }

}

export default Header;