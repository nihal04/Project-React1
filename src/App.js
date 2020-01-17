import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './about';
import Login from './login';
import Nav from './nav';
import './App.css';
import Images from './images';

class App extends Component {
  render(){
    return(
      <Router>
         <div>
           <Nav />

           <Switch>
               <Route exact path='/' component={home1} />
               <Route exact path='/about' component={About} />
               <Route path='/login' component={Login} />
               <Route path='/images' component={Images} />

           </Switch>
         </div>
      </Router>
    );
  }
}

const home1 = () => {
    return(
      <div className="home1">
        <h1 id='para'>Home page</h1>
        <h2>Welcome to Home page</h2>
      </div>
    )
  }
export default App;