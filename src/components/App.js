import React, { Component } from 'react';
import Header from './Header';
import Workers from './Worker/Workers';

export default class App extends Component{

  constructor() {
    super();
    this.state= {
      title: `Ommpa Loompa's Crew`
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}>
          <div className='mt-5'>
            <Workers />
          </div>
        </Header>
      </div>
    );
  }
}

