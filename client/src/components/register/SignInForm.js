import React from "react";
import {Link} from"react-router-dom";

class SignInForm extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: " ",
            password:" ",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
           [name]: value
        });

    }


    render(){
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
                                <button className= "FormField__Button mr-20">Sign In</button>
                                <Link to= "/register" className= "FormField__Link"> Create an Account</Link>
                            </div>

                         </form>   

                    </div>
                );
            }
        }

export default SignInForm;
