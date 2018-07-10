import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  // the constructor of our component we create a state object. 
  //This will be where we’ll store what the user enters in the form.
  constructor(props) {
    super(props);

    //connect the state to our two fields in the form by setting this.state.emai
    //and this.state.password as the value in our input fields. 
    //This means that when the state changes, React will re-render these components with the updated value.
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  //to update the state when the user types something into these fields,
  // we’ll call a handle function named handleChange. 
  //This function grabs the id (set as controlId for the <FormGroup>) of the field being changed 
  //and updates its state with the value the user is typing in
  //Also, to have access to the this keyword inside handleChange we store the reference 
  //to an anonymous function like so: handleChange = (event) => { } .
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      //setting the autoFocus flag for our email field, so that when our form loads, it sets focus to this field.
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          
          <Button
            block
            bsSize="large"
            //Link up our submit button with our state by using a validate function called validateForm. This simply checks if our fields are non-empty, but can easily do something more complicated.
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}