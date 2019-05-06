import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import webFontLoader from 'webfontloader';
/*
webFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700','Material Icons'],
  },
});*/

ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
