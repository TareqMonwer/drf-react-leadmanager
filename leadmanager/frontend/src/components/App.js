import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <h2>Hello From React Frontend</h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
