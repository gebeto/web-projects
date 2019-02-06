import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

(window as any).WebFontConfig = {
  custom: {
    families: [
      'Bebas Neue',
    ],
    urls: [
      // 'https://gebeto.github.io/assets/new/fonts/BebasNeue/regular.css?v=12',
      'BebasNeue/regular.css',
    ]
  },
  // timeout: 2000,
  active: function() {
    document.body.classList.add('loaded');
  }
};

(function(d: any) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
