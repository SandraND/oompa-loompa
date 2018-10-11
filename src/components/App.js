import React, { Component } from 'react';
import Header from './Header';
import WorkerList from './Worker/WorkerList';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      title: `Ommpa Loompa's Crew`,
      workers: [],
      term: ''
    };
  }

  componentDidMount() {
    if(this.state.term !== '') {
      this.fetchWorkers(this.state.term)
    } else {
      this.fetchWorkers('coding');
    }
  }

  fetchWorkers = (term) => {
    fetch('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas')
    .then(resp => {return resp.json()})
    .then(data => {
      this.setState({
        workers: data.results
      })
    })
  }

  changeSearchTermState = (event) => {
    this.setState({
      term: event.target.value
    }, () => {this.state.term === '' ? this.fetchWorkers('coding') : this.fetchWorkers(this.state.term)})
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <SearchBar changeSearchTermState={this.changeSearchTermState} value={this.state.term} />
        <WorkerList workers={this.state.workers} />
      </div>
    );
  }
}

export default App;

