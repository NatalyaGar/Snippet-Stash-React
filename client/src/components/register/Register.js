import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
// import RegisterForm from "./RegisterForm";
// import PageSwitcher from "./PageSwitcher";
import SignUpForm from "./pages/SignUpForm";
// import SignInForm from ".Routes/SignInForm";
import "./RegisterPage.css";



class RegisterPage extends React.Component {
    render(){
        return (

            <Router>

            <div className= "Register">
                <div className= "Register__Aside"></div>
                <div className= "Register__Form">
                    
                    <div className= "PageSwitcher">
                        <a href= "#" className= "PageSwitcher__Item"> Sign In </a>
                        <a href= "#" className= "PageSwitcher__Item--Active"> Sign Up </a>
                    </div>

    
                    <div className="FormTitle">

                        <Link to="sign-in" className= "FormTitle--Link"> Sign in </Link> or 
                        <a href="#" className= "FormTitle__Link FormTitle__Link--Active"> Sign Up </a>
                
                    </div>

                    <Route exact path= "/" component= {SignUpForm}>
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
                                <a href= "#" className= "FormField__Link"> I'm already a member</a>
                            </div>

                         </form>   

                    </div>
                    </Route>
                    <Route path= "/sign-in">
                        <h1>Sign In</h1>
                    </Route>
                </div>
            </div>  

            </Router>
        );
    }
}

export default RegisterPage;