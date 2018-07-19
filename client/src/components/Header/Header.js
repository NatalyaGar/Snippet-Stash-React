import React from 'react';
import "./Header.css";
// import ReactDOM from 'react-dom';
// import { Glyphicon, } from 'react-bootstrap';
import Headroom from 'react-headroom';
// import "./Register.js"
const user = {
    _id: '12345',
    name: 'Melissa',
    
}

function UserGreeting(props) {
    return <h1>Welcome Back {user.name}</h1>;
}

function GuestGreeting(props) {
    return <h1>Welcome Guest</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );


//TODO: if user is logged in, pass in name instead of Guest
//AND:    Change "Sign Out" to "Sign In"
const Header = props => (
    <Headroom>
        <div className="nav header-container">
            <div className="row">
                {/* <button classname="hamburger"> <Glyphicon glyph="glyphicon glyphicon-menu-hamburger" /> </button> */}
                <h1 className="snippet-brand" href="/">
                    <span className="glyphicon glyphicon-scissors" aria-hidden="true"> </span>
                    SNIPPETstash </h1>
                <p className="greeting welcome-message"> 
                
                <span> <Greeting isLoggedIn={true} />
                    {/* {user.isLoggedIn ? user.name : 'Guest'}  */}
                    </span>
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