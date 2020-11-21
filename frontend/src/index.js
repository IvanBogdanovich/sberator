import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/redux-store.js';

import App from './App';

console.log('%c Если есть что сказать заползай в телегу @ivanbogdanovich',
'background: #b751da; color: #fff; font-size: 20px');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
