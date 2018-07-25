// import React from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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

        const { email, password } = this.state;
        

        axios.post('/api/signin/sign-in', {

            email: email,
            password: password
        })
            .then((result) => {
                window.location.replace('/');
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={(e) => this.onSubmit(e)}>

                    <div className="FormField">
                        <label className="FormField__LabelSignIn" htmlFor="name">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter Your email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Your Password" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>


                    <div className="FormField">
                        <button className="FormField__Button mr-20" type="submit">Submit</button> 
                    </div>

                     <div>
                      <Link to= "/register" className= "FormField__LinkMember">Create an Account</Link>
                      <a className="FormField__LinkGuest" href="/">{'Enter as a Guest Here'}</a>
                     </div>

                </form>

            </div>
        );
    }
}


export default SignInForm;
