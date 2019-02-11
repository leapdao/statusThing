import React, { Component } from 'react';
import './App.css';

import Logger from './components/logger';
import Wallet from './components/wallet';

import web3 from './web3';

// eslint-disable-next-line
var DEBUG = true;



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {logs: []};

    this.log = this.log.bind(this);
  }

  log(text) {
    this.setState(prevState => ({
      logs: [...prevState.logs, text]
    }))
  }

  render() {
    return (
      <div className="App">
        <Wallet log={this.log} web3={web3}/>
        {DEBUG && <Logger logs={this.state.logs} />}
      </div>
    );
  }
}

export default App;
