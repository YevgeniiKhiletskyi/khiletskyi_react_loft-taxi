import React from 'react'



export class Login extends React.Component {

  onClick = event => {
    event.preventDefault();
    this.props.navigateTo('map');
  }

  onClickRegistration = event => {
    event.preventDefault();
    this.props.navigateTo('registration');
  }

  state = { email: ``, password: ``};

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  }

  handlEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  

  render() {
    const { email, password } = this.state;
    return <>
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <label htmlFor="email">
            Email:
          <input
            id="email"
            type="email"
            name="email"
            size="28"
            value={email}
            onChange={this.handlEmailChange}
          />
          </label>
        </div>
        <div>
          <lebel htmlFor="password">
            Password:
          <input
            id="password"
            type="password"
            name="password"
            size="28"
            value={password}
            onChange={this.handlePasswordChange}
          />
          </lebel>
        </div>
        <div>
          <label htmlFor="registration">
            New login:
          </label>
          <button 
            onClick={this.onClickRegistration} 
            type="registration" 
            value="Registration">
            Registration
          </button>
        </div>
        <div>
          <button onClick={this.onClick} type="submit" value="Submit">
            Submit
        </button>
        </div>
      </form>
    </>
  }
};

export default Login;




