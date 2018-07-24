import React, { Component } from 'react';

import axios from 'axios';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


import "./CategoryBar.css";



class CategoryBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            sidebarOpen: true
        }
    }

    componentDidMount(){
        axios.get('/api/categories')
            .then(response => {
                const {data} = response;
                this.setState({ categories: data }, () => console.log(this.state));
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    render() {
        const { categories } = this.state;
        return (
            <Nav className="navBar">
            <nav>
            <div className="col-2">
            <div className="navbar-default navbar-toggler sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                 <ul className="nav" id="side-menu">
                     {/* <li className="sidebar-search">
                         <div id="searchForm" className="input-group custom-search-form">
                             <input type="text" className="form-control" placeholder="Search..."/>
                             <span className="input-group-btn">
                                 <button id="searchBtn" className="btn btn-default" type="button">
                                     <i className="fa fa-search"></i>
                                 </button>
                             </span>
                         </div>
                     </li> */}
                     {/* <li className="mySnippets">
                         <button className="snippetsButton">
                         <h4><a href="#"><i className="fa fa-heart fa-fw"></i> My Snippets</a></h4>
                         </button>
                     </li> */}
                 <NavItem className="navItem">
                     <NavLink className="navLink"><a>
                         { categories.map((category, index) => 
                            <li>
                            <button className="navButton" id="categoryBtn">
                             <td><h4><Link to={category._id}>{category.item}</Link></h4></td>
                            </button>
                             </li>
                        )}
                    </a>
                    </NavLink>
                </NavItem>
                </ul>
                
            </div>
            </div>
            </div>
            </nav>
            </Nav>

        )
    }
}

export default CategoryBar;

