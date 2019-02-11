import React, { Component } from 'react';
import { Button } from 'antd';


class Wallet extends Component {

  render() {
    return (
      <div>
      <div>
        WALLET
      </div>
        <Button onClick={() => {
          this.props.log("click");
          console.log(this.props.web3.eth.defaultAccount);
          this.props.web3.eth.getAccounts().then(accounts => {
              console.log(accounts);
          });
        }}> CLICK </Button>
      </div>
    );
  }
}

export default Wallet;