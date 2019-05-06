import React, { Component } from 'react';
import './homepage.css';

export default class Homepage extends Component {

  constructor() {
    super( );
    this.state = {'products':[] };
  }

  render( ) {
    fetch("https://reqres.in/api/users?page=1")
    .then( res => res.json() )
    .then (
      ( result ) => {
        console.log('danish')
        this.setState({'products': result.data });
      }
    );

    return(
      <div>
        <center><h1 className='lbl_wh'>Welcome to the Area 51</h1></center>
        <TableComponent data = { this.state.products } />
      </div>
    );
  }
}

export class TableComponent extends Component {

  constructor( props ){
    super( props );
    this.state = { chkBoxStatus: [] };
    this.chkHandlerAllProducts = this.chkHandlerAllProducts.bind( this );
  };

  chkHandlerAllProducts( value ) {
    this.setState({ chkBoxStatus: value });
  }

  render( ) {

    let style = {
      float:'right',
      width:'auto',
      marginRight:'30px'
    }

    return (
      <center>
        <div>
          <div className="left20 left lbl_wh">
            <span>Select All</span>
            <input type="checkbox" name="chkSelectProduct" onChange={this.chkHandlerAllProducts}/>
          </div>
          <div style={style}>
            <button className="btn btn-primary">Add Employee</button>
            <button className="btn btn-primary">Say Hello</button>
          </div><br/>
          <table className="tg tbl_wd">
            <tr>
              <th className="tg-tadb"></th>
              <th className="tg-tadb">Student ID</th>
              <th className="tg-tadb">Full Name</th>
              <th className="tg-tadb">Last Name</th>
              <th className="tg-tadb">Action</th>
            </tr>
            { this.props.data.map( (item,index) =>
              <tr>
                <td className="tg-0pky"><input type='checkbox' name="products" id={item.id} checked={this.props.chkStatus}/></td>
                <td className="tg-0pky">{item.id}</td>
                <td className="tg-0pky">{item.first_name}</td>
                <td className="tg-0pky">{item.last_name}</td>
                <td className="tg-0pky"> <a href='#' id={item.id}>Edit</a> | <a href='#'  id={item.id}>Delete</a> | <a href='#'  id={item.id}>View</a> </td>
              </tr>
            ) }
          </table>

      </div></center>
    );
  }
}


export class AddStudent extends Component {
  render(){
    return(
      <div className="login-form">
      <div className="main-div">
        <div className="panel">
          <h1 className="Heading">Add Alien</h1>
          <p>Info Message Goes Here</p>
        </div>
        <form id="Login" >
          <div className="form-group">
            <input type="text" className="form-control" name="ballet" placeholder="Ballet Number"  />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Secret Key"  />
          </div>
          <div className="forgot">
            <a href="reset.html">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
    );
  }
}
