import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';

class App extends Component {

  render () {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
