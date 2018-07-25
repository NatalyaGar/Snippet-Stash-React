import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
    updateValue = (value) => {
        this.setState({ name: value });
    }

    onSubmit = (e) => {

        e.preventDefault();

        const {firstName, lastName, email, password } = this.state;
        

        axios.post('/api/user/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then((res) => {
                window.location.replace('/');
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        const { firstName, lastName, email, password } = this.state;
        return (
            <div className= "FormCenter">
            {/* <form className="FormFields" onSubmit={this.handleSubmit} action="/register" method= "post"> */}
            <form className="FormFields" onSubmit={(e) => this.onSubmit(e)}>
                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="firstName">First Name</label>
                    {/* <input type="text" id="nfirstName" className= "FormField__Input" placeholder="Enter Your First Name" name="firstName"/> */}
                    <input onChange={this.onChange} type="text" id="firstName" className= "FormField__Input" placeholder="Enter Your First Name" name="firstName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="lastName">Last Name</label>
                    {/* <input type="text" id="lastName" className= "FormField__Input" placeholder="Enter Your Last Name" name="LastName"/> */}
                    <input onChange={this.onChange} type="text" id="lastName" className= "FormField__Input" placeholder="Enter Your Last Name" name="lastName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Email</label>
                    {/* <input type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email"/> */}
                    <input onChange={this.onChange} type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Password</label>
                    {/* <input type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password"/> */}
                    <input onChange={this.onChange} type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password"/>
                </div>

                
                <div className="FormField">
                    <button type="submit" className= "FormField__Button mr-20">Sign Up</button> 
                </div>
                <div>
                <Link to= "/sign-in" className= "FormField__LinkMember">Already a member</Link>
                    <a className="FormField__LinkGuest" href="/">{'Enter as a Guest Here'}</a>
                </div>
             </form>   
            </div>
        );
    }
}

export default RegisterForm;

