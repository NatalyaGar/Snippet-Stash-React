import React, { Component } from "react";
import {Link} from "react-router-dom";

class RegisterForm extends Component {

    render(){
        return (
            <div className= "FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className= "FormField__Input" placeholder="Enter Your Full Name" name="name"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Email</label>
                    <input type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Password</label>
                    <input type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password"/>
                </div>

                
                <div className="FormField">
                    <button className= "FormField__Button mr-20">Sign Up</button>
                    <Link to= "/sign-in" className= "FormField__Link"> I'm already a member</Link>
                </div>
            
             </form>   
            </div>
        );
    }
}

export default RegisterForm;

