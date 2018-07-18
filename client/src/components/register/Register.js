import React from "react";
import { BrowserRouter as Router, Route,Link, NavLink} from "react-router-dom";
// import PageSwitcher from "./PageSwitcher";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";
import "./RegisterPage.css";



class RegisterPage extends React.Component {
    render(){
        return (

            <Router>

            <div className= "Register">
                <div className= "Register__Aside"></div>
                <div className= "Register__Form">
                    
                    <div className= "PageSwitcher">
                        <NavLink to= "/sign-in" activeClassName="PageSwitcher__Item--Active"
                         className= "PageSwitcher__Item"> Sign In </NavLink>
                        <NavLink exact to= "/register" activeClassName="PageSwitcher__Item--Active" 
                        className= "PageSwitcher__Item"> Sign Up </NavLink>
                    </div>

    
                    <div className="FormTitle">

                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className= "FormTitle--Link"> Sign In </NavLink> or 
                        <NavLink to="/register" activeClassName="FormTitle__Link--Active" className= "FormTitle--Link"> Sign Up </NavLink>
                
                    </div>

                    <Route path= "/register" component= {RegisterForm}>
                    
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
                    </Route>
                    <Route path= "/sign-in" component={SignInForm}>
                        <h1>Sign In</h1>
                    </Route>
                </div>
            </div>  

            </Router>
        );
    }
}

export default RegisterPage;