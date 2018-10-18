import React, { Component } from 'react';
import Header from './Header';
import WorkerList from './Worker/WorkerList';
import WorkerProfile from './Worker/WorkerProfile';
import SearchBar from './SearchBar/SearchBar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: `Oompa Loompa's Crew`,
      workers: [],
      term: ''
    };
  }

  componentDidMount() {
    if (this.state.term !== '') {
      this.fetchWorkers(this.state.term)
      if (this.state.term === this.workers) {
        console.log('AAAA')
      }
    } else {
      this.fetchWorkers('coding');
      console.log('BBBB')
    }
  }

  fetchWorkers = (term) => {
    fetch('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas')
      .then(resp => { return resp.json() })
      .then(data => {
        this.setState({
          workers: data.results
        })
      })
  }

  changeSearchTermState = (event) => {
    console.log(event.target.value)
    this.setState({
      term: event.target.value
    }, () => { this.state.term === '' ? this.fetchWorkers('coding') : this.fetchWorkers(this.state.term) })
  }

  render() {
    return (
      <Switch>
        <>
        <div>
          <Header title={this.state.title} />
          <SearchBar changeSearchTermState={this.changeSearchTermState} value={this.state.term} />
          <Route path='/' exact={true}
            render={props => <WorkerList workers={this.state.workers} />}
          />
        </div>
        </>
      </Switch>
    );
  }
}

export default App;

