import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

/*
document.body.addEventListener('dblclick', function() {
  document.body.classList.toggle('loaded');
});


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100)
});

document.querySelector('.projects-link').addEventListener('click', () => {
  document.body.classList.remove('loaded');
  document.body.classList.add('hidding');
});
*/


class App extends Component<any, any> {
  state = {
    opened: -1,
  };

  goToProjects = () => {
    document.body.classList.remove('loaded');
    document.body.classList.add('hidding');
  }

  render() {
    return (
      <div className="f-row s-100">
        <div className="f-col" data-op={this.state.opened !== -1 ? '1' : '0'}>
          <div className="sh ad-1 wr" data-opened={this.state.opened === 1 ? '1' : ''}>
            <div className="txt" onClick={() => { this.setState((s: any) => ({opened: s.opened === 1 ? -1 : 1})) }}>
              Hello world
            </div>
          </div>
          <div className="sh ad-2 wr" data-opened={this.state.opened === 2 ? '1' : ''}>
            <div className="txt" onClick={() => { this.setState((s: any) => ({opened: s.opened === 2 ? -1 : 2})) }}>
              Hello world
            </div>
          </div>
          <div className="sh ad-3 wr" data-opened={this.state.opened === 3 ? '1' : ''}>
            <div className="txt" onClick={() => { this.setState((s: any) => ({opened: s.opened === 3 ? -1 : 3})) }}>
              Hello world
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
