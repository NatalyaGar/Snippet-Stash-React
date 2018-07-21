import React, { Component } from 'react';
import Headroom from 'react-headroom';
import "./Header.css";
import axios from 'axios';

// class User extends Component {
//     constructor() {
//         super();
//         this.state = {
//             _id: '12345',
//             name: 'Melissa',
//         };
//     }

//     componentDidMount() {
//         axios.get('/api/user/:id')
//             .then(response => {
//                 const { data } = response;
//                 this.setState({ categories: data }, () => console.log(this.state));
//                 console.log(data);
//             })
//             .catch(error => console.log(error));
//     }
// }



        const user = {
        _id: '12345',
        name: 'Melissa',

    }

    //TODO: if user is logged in, display their name, if not display guest
    //AND:    Change "Sign Out" to "Sign In"
    const Header = props => (
        <Headroom>
            <nav>
                <ul>
                    <li><a href="" className="font1"><i className="fas fa-cut"></i> SNIPPETstash </a></li>
                    <li><a href="" className="font2">
                        Welcome {user.name ? 'Back ' + user.name : 'Guest'}
                    </a></li>
                    <li><a href="/register" className="font1">{user.name ? 'Log Out' : 'Log In'}</a></li>
                </ul>
            </nav>




        </Headroom>
    );



    export default Header