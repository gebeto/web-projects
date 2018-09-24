import React, { Component } from 'react';
import TestForm from './TestForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    // e.preventDefault();
    console.log(arguments);
  }

  render() {
    return (
      <div className="App">
        Hello world!!!
        <TestForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
