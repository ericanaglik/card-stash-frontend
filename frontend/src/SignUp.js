import React, { Component } from "react";
import landingRight from "./landing-right.png";
import landingLeft from "./landing-left.png";
import "./SignUp.css";
import { Link } from "react-router-dom";

import axios from "axios";


const Button = props => (
  <button className="c-button" onClick={props.onClick}>
    {props.text}
  </button>
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      username: "",
      password: "",
    };
  }

  handleInput = (param, e) => {
    console.log(param);

    if (param === "name") {
    }
  };

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/signup/', this.state, {
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }



  render() {
    return (
      <div>
        <div className='page-wrap'> 
        <div className='signup'>
                        <h2>Sign Up</h2>
                        <img alt=''
                      src="https://www.shorecakesupply.com/wp-content/uploads/2016/10/poke-3.png"
                      className="pokeball"
                      width="50px"
                    />

                        <form className="form">
                        <input className="c-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email.value}
                            onKeyUp={e => this.handleInput("email", e)}
                          />
                          <input className="c-input"
                            type="fullName"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            value={this.state.fullName.value}
                            onKeyUp={e => this.handleInput("fullName", e)}
                          />
                          <input className="c-input"
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username.value}
                            onKeyUp={e => this.handleInput("username", e)}
                          />
                          <input className="c-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password.value}
                            onKeyUp={e => this.handleInput("password", e)}
                          />
                          <div class="loginbutton">
                            <Button text="Sign Up" onClick={this.handleSubmit} />
                          </div>
                        </form>
                        <div class="switchpage">
                            <Link to="/login" className="navbar__link">
                              Need to log in? Click here
                            </Link>
                            </div>

                        <div class="switchpage">
                            <Link to="/signup" className="navbar__link">
                              Forgot password?
                            </Link>
                            </div>
                      </div>
                  </div>

                                <div class="landing-left">
                      <img src={landingLeft} alt="" />
                    </div>
                    
                    <div class="landing-right">
                      <img src={landingRight} alt="" />
                    </div>
                  </div>




    );
  }
}

export default SignUp;
