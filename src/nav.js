import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className='link'>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/images"}>Images</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
