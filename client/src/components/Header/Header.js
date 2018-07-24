import React, { Component } from 'react';
import Headroom from 'react-headroom';
import "./Header.css";

const Header = props => {
    let Greeting
    let InOutLink
    if (props.user === null) {
        Greeting = <a href="" className="navA font2">Hello guest</a>
        InOutLink = <a href="/register" className="navA font1">Sign In</a>
    } else if (props.user.firstName) {
        Greeting = (
            <a href="" className="navA font2">
                Welcome Back {props.user.firstName}
            </a>
        )
        InOutLink = <a href="/register" className="navA font1">Sign Out</a>
    }
    return (
        <Headroom>
            <nav className="navHeader">
                <ul className="navUl">
                    <li><a href="" className="navA font1"><i className="fas fa-cut"></i> SNIPPETstash </a></li>
                    <li>                        {Greeting}
                        {/* Welcome {user.name ? 'Back ' + user.name : 'Guest'} */}
                    </li>
                    <li>
                    {InOutLink}
                    {/* {user.name ? 'Log Out' : 'Log In'} */}
                    </li>
                </ul>
            </nav>




        </Headroom>
    );
}


export default Header