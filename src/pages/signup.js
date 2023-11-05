import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "./form";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //const history = useNavigate();
    // Add login logic here
    const { email, username, password, confirmPassword, firstName, lastName } = this.state;
    // Check if the username and password are valid
    if (password === confirmPassword) {
        // Successful signup, redirect or perform actions as needed
        alert(`Welcome, ${firstName} ${lastName}! Signup successful`);
    } else {
        this.setState({ error: 'Password and Confirm Password must match' });
    }
  }

  render() {
    const { email, username, password, confirmPassword, firstName, lastName, error} = this.state;
    return (
      <div className="login-page">
        <h2 className = 'signup-heading'>Sign Up</h2>
        {error && <p className="signup-error">{error}</p>}
        <form onSubmit={this.handleSubmit}>
        <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={this.handleInputChange}
              />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={this.handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
            />
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleInputChange}
            />
        </div>
          <div>
            <button type="submit" className = 'signup-button' /*</div>onClick={Form}*/>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupPage;
