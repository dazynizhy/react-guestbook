import React, { Component } from 'react';
import GuestBookApp from './components/GuestBookApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <GuestBookApp />
      </div>
    );
  }
}

export default App;
