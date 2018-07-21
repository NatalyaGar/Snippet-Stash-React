// import React from "react";
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from"react-router-dom";


class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password:"",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let target = e.target;//select target element (email and password input)
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        //reset state (above0 every time there is a change
        this.setState({
           [name]: value
        });


        // onSubmit = (e) => {
        //     e.preventDefault();
        
            const {email,password } = this.state;
        
            axios.post('/api/signin/sign-in', { email, password })
              .then((result) => {
                // this.props.history.push("/signin")
                console.log(result);
            })
            .catch((error) => {
              console.log(error);
            })
        
              
        //   }

//     componentsDidMount(){
//     axios.post('/api/register')
//       .then((response => {
//         const {data} = response;
//         this.setState({ user: data}, ()=> console.log(this.state));
//         console.log(data);
//       })
//       .catch(error => console,log(error));
   }

    render() {
            // const { email, password } = this.state;
            return (
                    <div className= "FormCenter">
                        <form className="FormFields" onSubmit={this.handleSubmit}>

                            <div className="FormField">
                                <label className= "FormField__Label" htmlFor="name">Email</label>
                                <input type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>

                            <div className="FormField">
                                <label className= "FormField__Label" htmlFor="name">Password</label>
                                <input type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>

                            
                            <div className="FormField">
                                <button className= "FormField__Button mr-20" type= "button" onClick={()=> this.signUp()}>Sign In</button>
                                <Link to= "/register" className= "FormField__Link"> Create an Account</Link>
                            </div>

                         </form>   

                    </div>
                );
            }
        }
    

export default SignInForm;
