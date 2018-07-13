import React from 'react';
import "./CategoryBar.css";
import { Glyphicon, Button } from 'react-bootstrap';


const CategoryBar = props => (
    <div className="col-2">
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search">
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search..." />
                            <Button className="searchBtn">
                                <Glyphicon glyph="search" />
                            </Button>
                        </div>
                    
                    </li>
                    <li>
                        <a href="#">
                            <Glyphicon glyph="heart" /> My Snippets</a>
                    </li>
                </ul>
            </div>
        </div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>
);

// export const CategoryBar = ({ children }) => {
//     return (
//       <div className="list-overflow-container">
//         <ul className="list-group">
//           {children}
//         </ul>
//       </div>
//     );
//   };

export default CategoryBar

