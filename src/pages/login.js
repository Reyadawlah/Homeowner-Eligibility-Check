import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    // Add login logic here
    const { username, password } = this.state;
    
    // Check if the username and password are valid
    if (username === 'your_username' && password === 'your_password') {
      // Successful login, redirect or perform actions as needed
      alert('Login successful');
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  }

  render() {
    const { username, password, error } = this.state;

    return (
      <div className="login-page">
        <h2 className = 'login-heading'>Sign On</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password </label>
            <input className= 'password-field'
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit" className = 'login-button'>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
