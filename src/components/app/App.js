import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import ViewControllerContainer from '../viewController/ViewController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewController/>
      </div>
    );
  }
}

export default App;
