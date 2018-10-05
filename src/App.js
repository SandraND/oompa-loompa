import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from './ListView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png'} alt="oompa-loompa-logo" className="img-responsive"></img>
          </div>
          <div className="wrapper">
            <h1>Oompa Loompa's Crew</h1>
          </div>
        </header>
        <ListView />
      </div>
    );
  }
}

export default App;
