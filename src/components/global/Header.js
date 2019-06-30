import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    if (this.state.isOpen === true) {
      this.toggle();
    }
  }

  render() {
    return (
      <div id="header">
        <Navbar fixed="top" expand="md" className="navbar-dark">
          <NavbarBrand href="/">
            <img src="https://content.screencast.com/users/aliashkevich/folders/Default/media/3384b2f1-221e-43aa-87e5-9947a9a7d73f/logo_white.png"
              alt="logo"
              className="logo" />
            <span>Wild Quiz</span>
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RouterLink exact to="/home" onClick={this.closeNavbar}>Home</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/how_we_built" onClick={this.closeNavbar}>How we built</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/about" onClick={this.closeNavbar}>About</RouterLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
