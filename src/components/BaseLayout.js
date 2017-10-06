import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/App.css';

 class BaseLayout extends Component {
  render() {
    return (
      <div className BaseLayout>
      <center>
      <br></br>
      <br></br>

      <NavLink className='navlink' to='/'>Home</NavLink>
      <NavLink className='navlink' to='/users'> Users </NavLink>
      <br></br>
      <br></br>
      <br></br>

      <div className='kids'>
      {this.props.children}
      </div>
      </center>
      </div>
    );
  }
}
 export default BaseLayout;
