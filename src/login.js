import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }
  displayData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({ userData: response.data });
    });
  };
  render() {
    return (
      <div>
        <table>
          <tr>
            <td colspan="2">
              <h2>Login</h2>
            </td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button onClick={this.displayData}>Submit</button>
            </td>
          </tr>
        </table>

        {this.state.userData.map(data => {
          return <p>{data.title} </p>;
        })}
      </div>
    );
  }
}
export default Login;