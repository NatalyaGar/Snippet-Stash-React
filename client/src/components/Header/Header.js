import React from 'react';
import "./Header.css";
import { Glyphicon, Navbar } from 'react-bootstrap';

const name = "Melissa";
const username = "LadyCoder";


//TODO: if user is logged in, pass in name instead of Guest
//AND:    Change "Sign Out" to "Sign In"
const Header = props => (
    <div className="nav navbar header-container">
        <div className="row">
            <h1 className="snippet-brand" href="#">
                <Glyphicon glyph="scissors" /> SNIPPETstash
            </h1>
            <p className="greeting welcome-message"> Welcome
                <span> {name}</span>
                {/* <span> Guest </span> */}
            </p>
            <p className="header-link">
                <a className="nav-link" href="#">Sign Out</a>
            </p>
        </div>
    </div>
);



export default Header