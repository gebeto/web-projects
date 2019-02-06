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


class App extends Component {
  componentDidMount() {
    // loadFonts('https://gebeto.github.io/assets/new/fonts/BebasNeue/BebasNeueRegular', ['ttf', 'woff', 'eot']).then(res => {
    //   console.log(res);
    //   document.body.classList.add('loaded');
    // });
    
  }

  goToProjects = () => {
    document.body.classList.remove('loaded');
    document.body.classList.add('hidding');
  }

  render() {
    return (
      <div className="sidebar">
        <div className="header">
          Hello
        </div>
        <div className="content">
          <h1 className="title">Slavik Nychkalo</h1>
          <h2 className="sub-title">Software Engineer</h2>
          <p className="overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.</p>
        </div>
        <div className="footer">
          <ul className="social">
            <li className="github">
              <img src="https://gebeto.github.io/assets/logos/github.svg"/>
            </li>
            <li className="facebook">
              <img src="https://gebeto.github.io/assets/logos/facebook.svg"/>
            </li>
            <li className="codepen">
              <img src="https://gebeto.github.io/assets/logos/codepen.svg"/>
            </li>
            <li className="twitter">
              <img src="https://gebeto.github.io/assets/logos/twitter.svg"/>
            </li>
          </ul>
          <span className="projects-link" onClick={this.goToProjects}>Go to projects</span>
        </div>
      </div>
    );
  }
}

export default App;
