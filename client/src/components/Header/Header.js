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


//TODO: if user is logged in, 
//AND:    Change "Sign Out" to "Sign In"
const Header = props => (
    <Headroom>
        <nav>
            <ul>
                <li><a href=""><span className="glyphicon glyphicon-scissors" aria-hidden="true"> </span>SNIPPETstash </a></li>
                <li><a href="">
                    Welcome {user.name ? 'Back ' + user.name : 'Guest'}
                </a></li>
                <li><a href="/register">{user.name ? 'Log Out': 'Log In'}</a></li>
            </ul>
        </nav>



        {/* <div className="nav header-container">
            <div className="row">

                <h1 className="snippet-brand" href="/">
                    <span className="glyphicon glyphicon-scissors" aria-hidden="true"> </span>
                    SNIPPETstash </h1>
                <p className="greeting welcome-message"> 
                
                <span> <Greeting isLoggedIn={true} /> */}

        {/* ----- commented out ----- */}
        {/* {user.isLoggedIn ? user.name : 'Guest'}  */}
        {/* ----- /commented out ----- */}

        {/* </span> */}

        {/* ----- commented out ----- */}
        {/* <span> {name}</span> */}
        {/* <span> Guest </span> */}
        {/* ----- /commented out ----- */}


        {/* </p>
                <p className="header-link">
                    <a className="nav-link" href="/register">{user.isLoggedIn ? 'Sign Out' : 'Sign In'}</a>
                </p>
            </div>
        </div> */}

    </Headroom>
);



export default Header