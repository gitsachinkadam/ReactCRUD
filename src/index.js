import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./app.css');

const title = 'Registration Application';

ReactDOM.render(<App title={title}/>,document.getElementById('app'));

module.hot.accept();