import React, { Component } from 'react';

class Logger extends Component {

  render() {
    return (
      <div>
        Logs:
        {this.props.logs.map(log => (<div>{JSON.stringify(log)}</div>))}
      </div>
    );
  }
}

export default Logger;