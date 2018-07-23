import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
class RegisterForm extends Component {

    constructor() {
        super();
        this.state = {
          firstName: '',
          lastName:'',
          email: '',
          password:'',
          
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => console.log(this.state));
      }
    
      updateValue = (value) => {
        this.setState({ name: value });
      }
    
      onSubmit = (e) => {
        
        e.preventDefault();
    
        const { firstName,lastName, email,password} = this.state;
        axios.post('/api/user/register', { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
          .then((result) => {
            window.location.replace('/');
            // this.props.history.push("/")
            console.log(result);
            // result.redirect('/')
          })
          .catch((error) => {
            console.log(error);
          })
      }
    


    render(){
        return (
            <div className= "FormCenter">
            <form className="FormFields" onSubmit={(e) => this.onSubmit(e)}>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="firstName">First Name</label>
                    <input onChange={this.onChange} type="text" id="firstName" className= "FormField__Input" placeholder="Enter Your First Name" name="firstName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="lastName">Last Name</label>
                    <input onChange={this.onChange} type="text" id="lastName" className= "FormField__Input" placeholder="Enter Your Last Name" name="lastName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Email</label>
                    <input onChange={this.onChange} type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email"/>
                </div>

                <div className="FormField">
                    <label className htmlFor="name">Password</label>
                    <input onChange={this.onChange} type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password"/>
                </div>

                
                <div className="FormField">
                    <button type="submit" className= "FormField__Button mr-20">Submit</button>
                    <Link to= "/sign-in" className= "FormField__Link"> I'm already a member</Link>
                </div>

                 <div>
                   <a className="nav-link" href="/">{'Enter as a Guest Here'}</a>
                </div>
            
             </form>   
            </div>
        );
    }
}

export default RegisterForm;

