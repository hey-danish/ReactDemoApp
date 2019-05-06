import React, { Component } from 'react';
import './login.css';


export default class LoginForm extends Component {

  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.state = { ballet:'', password:'', error:'' };
  }

  handleSubmit( event ) {
    event.preventDefault(  );
    this.props.triggerCallbackFromChild(this.state.ballet, this.state.password);
  }

  handleChange( event ) {
    this.setState( { [event.target.name]: event.target.value } );
  }

  render(){
    return (
      <div className="container">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h1 className="Heading">NASA Employees Login</h1>
              <p>{this.props.message}</p>
            </div>
            <form id="Login" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" name="ballet" placeholder="Ballet Number" value={this.state.ballet} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Secret Key" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="forgot">
                <a href="reset.html">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <p className="botto-text"> Copyright @ Whacked Out Media</p>
        </div>
      </div>
    );
  };
}
