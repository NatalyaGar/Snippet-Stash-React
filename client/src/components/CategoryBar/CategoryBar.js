import React, { Component } from 'react';

import axios from 'axios';

import "./CategoryBar.css";
import { Glyphicon, Button } from 'react-bootstrap';


class CategoryBar extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
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
            <div className="col-2">
                <ul>
                    { categories.map((category, index) => (
                        <li>
                        <btn key={category._id}>{category.item}</btn>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CategoryBar;
