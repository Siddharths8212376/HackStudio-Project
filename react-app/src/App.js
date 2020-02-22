import React, { Component } from 'react';
import './App.css';
//import SignIn from './components/SignIn';
//import SignUp from './components/SignUp'

import Landing from './components/Landing'
// convert the stateless widget to stateful widget
class App extends Component{
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}


export default App;
