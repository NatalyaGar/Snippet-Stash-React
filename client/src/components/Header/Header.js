import React from 'react';
import "./Header.css";
import { Glyphicon, Navbar } from 'react-bootstrap';
import Headroom from 'react-headroom';

const user = {
    _id: '12345',
    name: 'Melissa',
    isLoggedIn: true
}
const name = "Melissa";


//TODO: if user is logged in, pass in name instead of Guest
//AND:    Change "Sign Out" to "Sign In"
const Header = props => (
    <Headroom>
        <div className="nav header-container">
            <div className="row">
                {/* <button classname="hamburger"> <Glyphicon glyph="glyphicon glyphicon-menu-hamburger" /> </button> */}
                <h1 className="snippet-brand" href="#">
                    <Glyphicon glyph="scissors" /> SNIPPETstash </h1>
                <p className="greeting welcome-message"> Welcome
                <span> {user.isLoggedIn ? user.name : 'Guest'} </span>
                    {/* <span> {name}</span> */}
                    {/* <span> Guest </span> */}
                </p>
                <p className="header-link">
                    <a className="nav-link" href="/register">{user.isLoggedIn ? 'Sign Out' : 'Sign In'}</a>
                </p>
            </div>
        </div>
    </Headroom>
);



export default Header