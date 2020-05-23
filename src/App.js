import React, { Component } from 'react';
import './App.css';
import Greet from "../src/components/Greet";
import Welcome from "../src/components/Welcome"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" />
        <Welcome name="Diana" />
      </div>
    );
  }
}

export default App;
