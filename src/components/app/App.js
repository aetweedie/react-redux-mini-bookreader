import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers/books';
import ViewControllerContainer from '../viewController/ViewController';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ViewControllerContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
