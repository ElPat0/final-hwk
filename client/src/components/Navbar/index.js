import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'react-strap';

export default class NavHeader extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/" style={{ 'color': 'blanchedalmond' }}>Google Books</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{ 'color': 'blanchedalmond' }} href="/search">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ 'color': 'blanchedalmond' }} href="/saved">Saved</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}
