import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class BaseLayout extends React.Component{
    render () {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarBrand href="/">BankShot</NavbarBrand>
                        <Nav className="mr-auto" pills>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/users">Users</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>

                {this.props.children}
            </div>
        )
    }
}