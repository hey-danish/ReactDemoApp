import React, { Component } from 'react';
import { NavigationDrawer, Button, FontIcon } from 'react-md';
import logo from './logo.svg';
import './App.css';
import LoginForm from './login/login.jsx';
import Homepage from './homepage/homepage.js';

class App extends Component {

  constructor( props ) {
    super( props );
    this.LoginHandler = this.LoginHandler.bind(this);
    if( localStorage.getItem('IsLoggedIn') !== null ) {
      this.state = { IsLoggedIn: localStorage.getItem('IsLoggedIn'), message:'' };
    } else {
      this.state = { IsLoggedIn: null };
    }
  }

  GetInitialLayout(  ){
    let view;
    if ( this.state.IsLoggedIn ) {
      view = <Homepage/>
    } else if( this.state.IsLoggedIn === null || this.state.IsLoggedIn === false ){
      view = <LoginForm triggerCallbackFromChild={this.LoginHandler} message={this.state.message}  />
    }
    return view;
  }

  LoginHandler( ballet_number, password ){
    if( ballet_number==="123" && password==="dan" ) {
      this.setState( { IsLoggedIn:true } );
      localStorage.setItem('IsLoggedIn', true);
    } else {
      this.setState( { IsLoggedIn:false, message: 'Login Failed!!!!' } );
      localStorage.setItem('IsLoggedIn', false);
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          { this.GetInitialLayout( ) }
        </div>
      </div>
    );
  }
}

export default App;
