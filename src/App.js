import React, { Component } from 'react';
import './App.css';

import Web3 from 'web3';

const faucet = "https://jw98dxp219.execute-api.eu-west-1.amazonaws.com/testnet/address";
const wallet = "https://testnet.leapdao.org/wallet";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inited: false,
      error: false
    }
    this.init = this.init.bind(this);
    this.init();
  }

  async init() {
    const { ethereum } = window;
    const web3 = new Web3(ethereum);
    window.addEventListener('load', async () => {
      try {
        await ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];
        const res = await fetch(faucet, {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            address: web3.eth.defaultAccount
          })
        });
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        this.setState({...this.state, inited: true});
      } catch (error) {
        this.setState({...this.state, error: true});
      }
    });
  }

  render() {
    if (this.state.inited) {
      window.location = wallet;
    }

    if (this.state.error) {
      return (
         <div className="App">
           Ups, something went wrong!
         </div>
       );
    } else {
      return (
        <div className="App">
          {!this.state.inited && (
            <div>
              Initing
            </div>
          )}
          {this.state.inited && (
            <div>
              Done
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
