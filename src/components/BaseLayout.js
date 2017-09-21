import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Base extends Component {
  render(){
    return (
      <div className="container-fluid nav">
        <nav>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/about'>
            About
          </NavLink>
          <NavLink exact to='/portfolio'>
            Portfolio
          </NavLink>
        </nav>
        {this.props.children}
        <footer>
          <h2>FOOTER</h2>
        </footer>
      </div>
    );
  }
}
