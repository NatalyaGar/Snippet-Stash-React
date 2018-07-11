import React from 'react';
import "./Header.css";
import { Glyphicon, Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = props => (
    <div className="header-container">
        <nav className="navbar navbar-static-top">
            <a className="navbar-brand" href="public.html">
                <span className="glyphicon glyphicon-scissors"></span>SNIPPETstash</a>
            <div className="sidebar" role="navigation">
                
                <a className="greeting"href="#"> Welcome</a>
                
                <a className="login-link" href="#"> Login </a>
            
            </div>
        </nav>
    </div>
);

// using react-bootstrap library
const UnusedHeader = props => (
    <div className="Header">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">
                        <Glyphicon glyph="scissors" /> SNIPPETstash
                    </a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    Welcome
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Log In
                </NavItem>
            </Nav>
        </Navbar>;
    </div>


);

export default Header